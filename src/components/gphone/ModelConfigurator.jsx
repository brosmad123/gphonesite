import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const STORAGE_OPTIONS = [
  { label: "1TB", value: "1tb", price: 999 },
  { label: "2TB", value: "2tb", price: 1099 },
  { label: "4TB", value: "4tb", price: 1299 },
];

const COLOR_OPTIONS = [
  { label: "Midnight Black", value: "midnight_black", hex: "#1a1a1a" },
  { label: "Arctic Silver", value: "arctic_silver", hex: "#c0c0c0" },
  { label: "Phantom Blue", value: "phantom_blue", hex: "#1a2744" },
];

// Phantom Blue is sold out on 1TB and 2TB
const SOLD_OUT_COMBOS = [
  { color: "phantom_blue", storage: "1tb" },
  { color: "phantom_blue", storage: "2tb" },
];

export default function ModelConfigurator() {
  const [selectedStorage, setSelectedStorage] = useState("1tb");
  const [selectedColor, setSelectedColor] = useState("midnight_black");

  const currentPrice = STORAGE_OPTIONS.find(s => s.value === selectedStorage)?.price || 999;
  
  const isSoldOut = SOLD_OUT_COMBOS.some(
    c => c.color === selectedColor && c.storage === selectedStorage
  );

  const selectedColorLabel = COLOR_OPTIONS.find(c => c.value === selectedColor)?.label;
  const selectedStorageLabel = STORAGE_OPTIONS.find(s => s.value === selectedStorage)?.label;

  return (
    <section className="py-20 px-6" id="preorder">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Pre-order gPhone V.
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Reserve yours before June 10th, 2026.
        </p>

        {/* Price */}
        <div className="text-center mb-10">
          <p className="text-4xl font-bold text-foreground">
            ${currentPrice.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground mt-1">Free overnight shipping</p>
        </div>

        {/* Color */}
        <div className="mb-8">
          <p className="text-sm font-medium text-foreground mb-3">
            Colour: <span className="font-normal text-muted-foreground">{selectedColorLabel}</span>
          </p>
          <div className="flex gap-3">
            {COLOR_OPTIONS.map(c => (
              <button
                key={c.value}
                onClick={() => setSelectedColor(c.value)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor === c.value
                    ? "border-primary scale-110"
                    : "border-border hover:border-muted-foreground"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.label}
              />
            ))}
          </div>
        </div>

        {/* Storage */}
        <div className="mb-8">
          <p className="text-sm font-medium text-foreground mb-3">Storage</p>
          <div className="grid grid-cols-3 gap-3">
            {STORAGE_OPTIONS.map(s => (
              <button
                key={s.value}
                onClick={() => setSelectedStorage(s.value)}
                className={`py-3 px-4 rounded-xl border text-center transition-all ${
                  selectedStorage === s.value
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                <p className="font-semibold text-sm">{s.label}</p>
                <p className="text-xs mt-0.5">${s.price.toLocaleString()}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sold out notice */}
        {isSoldOut && (
          <div className="bg-muted rounded-xl p-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              Phantom Blue is sold out for this model. Please choose Midnight Black or Arctic Silver.
            </p>
          </div>
        )}

        {/* CTA */}
        {isSoldOut ? (
          <Button disabled className="w-full h-14 text-lg rounded-xl bg-muted text-muted-foreground">
            Sold Out
          </Button>
        ) : (
          <Link to={`/checkout?storage=${selectedStorage}&color=${selectedColor}&price=${currentPrice}`}>
            <Button className="w-full h-14 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
              PREORDER NOW
            </Button>
          </Link>
        )}

        <p className="text-xs text-muted-foreground text-center mt-6">
          Offer ends June 10th, 2026. 30-day money-back guarantee.
        </p>
      </motion.div>
    </section>
  );
}