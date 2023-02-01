import React from 'react'

export default function ResumeController() {
  const [dev, setDev] = useState("Desenvolvedor Full Stack");

  return (
    <div>
      <ResumeView dev={dev} />
    </div>
  );
}
