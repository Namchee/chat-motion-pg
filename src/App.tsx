import Uncontrolled from "@/components/module/Uncontrolled";
import Animated from "@/components/module/Animated";
import ComingSoon from "./components/module/ComingSoon";

export default function App() {
  return (
    <>
      <div className="relative border-r border-b border-gray-200 grid place-items-center">
        <p className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
          Uncontrolled Form
        </p>

        <Uncontrolled />
      </div>

      <div className="relative border-b border-gray-200 grid place-items-center">
        <p className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
          Animated
        </p>

        <Animated />
      </div>

      <div className="relative border-r border-gray-200 grid place-items-center">
        <p className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
          Morphed
        </p>

        <ComingSoon />
      </div>

      <div className="relative grid place-items-center">
        <p className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
          Animated Text Bubble
        </p>

        <ComingSoon />
      </div>
    </>
  )
}
