import SectionNav from "../SectionNav";

export default function SectionNavExample() {
  const sections = [
    { id: "wat-is-thuisonderwijs", title: "Wat is thuisonderwijs" },
    { id: "waarom-kiezen", title: "Waarom kiezen families hiervoor" },
    { id: "misverstanden", title: "Veelvoorkomende misverstanden" },
    { id: "wettelijk", title: "Wettelijke context" },
  ];

  return (
    <div className="p-8 max-w-xs">
      <SectionNav sections={sections} />
    </div>
  );
}
