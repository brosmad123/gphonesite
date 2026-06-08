import ModelConfigurator from "../components/gphone/ModelConfigurator";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const LOGO_URL = "https://i.postimg.cc/3wHxcRB7/g-Phone-03-06-2026.png";

export default function Preorder() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-12 pb-4 text-center">
        <img src={LOGO_URL} alt="gPhone Logo" className="w-16 h-16 mx-auto mb-4 object-contain" />
      </div>
      <ModelConfigurator />
      <Footer />
      <BottomNav />
    </div>
  );
}