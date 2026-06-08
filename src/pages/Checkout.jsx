import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import BottomNav from "../components/gphone/BottomNav";

const STORAGE_MAP = {
  "1tb": { label: "1TB", price: 999 },
  "2tb": { label: "2TB", price: 1099 },
  "4tb": { label: "4TB", price: 1299 },
};

const COLOR_MAP = {
  "midnight_black": "Midnight Black",
  "arctic_silver": "Arctic Silver",
  "phantom_blue": "Phantom Blue",
};

const HST_RATE = 0.13;

export default function Checkout() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const storage = urlParams.get("storage") || "1tb";
  const color = urlParams.get("color") || "midnight_black";
  
  const storageInfo = STORAGE_MAP[storage] || STORAGE_MAP["1tb"];
  const colorLabel = COLOR_MAP[color] || "Midnight Black";
  const subtotal = storageInfo.price;
  const tax = Math.round(subtotal * HST_RATE * 100) / 100;
  const total = subtotal + tax;

  const [step, setStep] = useState("review"); // review | payment | confirmed
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const handleChange = (field, value) => {
    let formatted = value;
    if (field === "cardNumber") formatted = formatCardNumber(value);
    if (field === "expiry") formatted = formatExpiry(value);
    if (field === "cvv") formatted = value.replace(/\D/g, "").slice(0, 3);

    setForm(prev => ({ ...prev, [field]: formatted }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validatePayment = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.postalCode.trim()) newErrors.postalCode = "Required";
    if (form.cardNumber.replace(/\s/g, "").length !== 16) newErrors.cardNumber = "Enter 16 digits";
    if (form.expiry.length !== 5) newErrors.expiry = "MM/YY";
    if (form.cvv.length !== 3) newErrors.cvv = "3 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validatePayment()) {
      setStep("confirmed");
    }
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-lg mx-auto px-6 pt-8">
        {/* Back */}
        <button
          onClick={() => step === "review" ? navigate(-1) : setStep("review")}
          className="flex items-center gap-1 text-primary text-sm hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {step === "payment" ? "Back to review" : "Back"}
        </button>

        {step === "confirmed" ? (
          <ConfirmedView total={total} />
        ) : step === "payment" ? (
          <PaymentView
            form={form}
            errors={errors}
            onChange={handleChange}
            onSubmit={handlePlaceOrder}
            total={total}
          />
        ) : (
          <ReviewView
            storageLabel={storageInfo.label}
            colorLabel={colorLabel}
            subtotal={subtotal}
            tax={tax}
            total={total}
            onContinue={() => setStep("payment")}
          />
        )}
      </div>
      <BottomNav />
    </div>
  );
}

function ReviewView({ storageLabel, colorLabel, subtotal, tax, total, onContinue }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold text-foreground mb-2">Review your order.</h1>
      <p className="text-muted-foreground mb-10">Make sure everything looks right.</p>

      <div className="space-y-4 mb-10">
        <div className="flex justify-between py-3 border-b border-border">
          <span className="text-foreground">gPhone V</span>
          <span className="text-muted-foreground">{storageLabel}, {colorLabel}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-border">
          <span className="text-foreground">Subtotal</span>
          <span className="text-foreground font-medium">${subtotal.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between py-3 border-b border-border">
          <span className="text-foreground">Shipping</span>
          <span className="text-foreground font-medium">Free</span>
        </div>
        <div className="flex justify-between py-3 border-b border-border">
          <span className="text-foreground">Tax (HST 13%)</span>
          <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-4">
          <span className="text-lg font-bold text-foreground">Total</span>
          <span className="text-lg font-bold text-foreground">${total.toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={onContinue}
        className="w-full h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Continue to Payment
      </Button>
    </motion.div>
  );
}

function PaymentView({ form, errors, onChange, onSubmit, total }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold text-foreground mb-2">Payment details.</h1>
      <p className="text-muted-foreground mb-10">Enter your shipping and payment information.</p>

      <div className="space-y-5">
        <div>
          <Label className="text-sm font-medium text-foreground">Full Name</Label>
          <Input
            value={form.fullName}
            onChange={e => onChange("fullName", e.target.value)}
            placeholder="John Smith"
            className={`mt-1 h-12 ${errors.fullName ? "border-destructive" : ""}`}
          />
          {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground">Email</Label>
          <Input
            value={form.email}
            onChange={e => onChange("email", e.target.value)}
            placeholder="john@example.com"
            type="email"
            className={`mt-1 h-12 ${errors.email ? "border-destructive" : ""}`}
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label className="text-sm font-medium text-foreground">Address</Label>
          <Input
            value={form.address}
            onChange={e => onChange("address", e.target.value)}
            placeholder="123 Main Street"
            className={`mt-1 h-12 ${errors.address ? "border-destructive" : ""}`}
          />
          {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-foreground">City</Label>
            <Input
              value={form.city}
              onChange={e => onChange("city", e.target.value)}
              placeholder="Toronto"
              className={`mt-1 h-12 ${errors.city ? "border-destructive" : ""}`}
            />
            {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground">Postal Code</Label>
            <Input
              value={form.postalCode}
              onChange={e => onChange("postalCode", e.target.value)}
              placeholder="A1A 1A1"
              className={`mt-1 h-12 ${errors.postalCode ? "border-destructive" : ""}`}
            />
            {errors.postalCode && <p className="text-xs text-destructive mt-1">{errors.postalCode}</p>}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-4">Card Information</p>
          <div>
            <Input
              value={form.cardNumber}
              onChange={e => onChange("cardNumber", e.target.value)}
              placeholder="1234 5678 9012 3456"
              className={`h-12 ${errors.cardNumber ? "border-destructive" : ""}`}
            />
            {errors.cardNumber && <p className="text-xs text-destructive mt-1">{errors.cardNumber}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <Input
                value={form.expiry}
                onChange={e => onChange("expiry", e.target.value)}
                placeholder="MM/YY"
                className={`h-12 ${errors.expiry ? "border-destructive" : ""}`}
              />
              {errors.expiry && <p className="text-xs text-destructive mt-1">{errors.expiry}</p>}
            </div>
            <div>
              <Input
                value={form.cvv}
                onChange={e => onChange("cvv", e.target.value)}
                placeholder="CVV"
                type="password"
                className={`h-12 ${errors.cvv ? "border-destructive" : ""}`}
              />
              {errors.cvv && <p className="text-xs text-destructive mt-1">{errors.cvv}</p>}
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        className="w-full h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 mt-10"
      >
        Place Order &middot; ${total.toFixed(2)}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        This is a mock checkout for demonstration purposes.
      </p>
    </motion.div>
  );
}

function ConfirmedView({ total }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center pt-20"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Order placed.</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Your gPhone V pre-order of ${total.toFixed(2)} has been confirmed.
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        You will receive a confirmation email shortly. Thank you for your order.
      </p>
      <a href="/" className="text-primary text-lg font-medium hover:underline">
        Return to gPhone V &rsaquo;
      </a>
    </motion.div>
  );
}