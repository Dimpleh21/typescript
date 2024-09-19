import Image from "next/image";
import Button from "@/app/components/Button";
export default function Home() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Primary Button
      </Button>
      <Button variant="secondary" size="large">
        Secondary Button
      </Button>
      <Button variant="primary" size="small" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
