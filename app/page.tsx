import Image from "next/image";
import { twMerge } from "tailwind-merge";
import iconSupervisor from "@/public/icon-supervisor.svg";
import iconCalculator from "@/public/icon-calculator.svg";
import iconKarma from "@/public/icon-karma.svg";
import iconTeamBuilder from "@/public/icon-team-builder.svg";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center bg-neutral-3 px-8 py-[85px] tracking-[.007em] text-neutral-1">
      <header className="max-w-[540px]">
        <h1 className="flex flex-col items-center space-y-[1px] text-2xl lg:text-4xl">
          <span className="py-[2px] lg:py-1 font-extralight">
            Reliable, efficient delivery
          </span>
          <span className="py-[2px] lg:py-1 font-bold">Powered by Technology</span>
        </h1>
        <p className="font-regular mt-4 text-center text-[.938rem] leading-[1.667em] opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="mt-20 grid max-w-[1110px] grid-cols-1 gap-6 self-center lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr_1fr]">
        <Card
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          img={iconSupervisor}
          className={
            "from-primary-2 to-primary-2 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4"
          }
        />
        <Card
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          img={iconTeamBuilder}
          className={
            "from-primary-1 to-primary-1 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
          }
        />
        <Card
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          img={iconKarma}
          className={
            "from-primary-3 to-primary-3 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5"
          }
        />
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          img={iconCalculator}
          className={
            "from-primary-4 to-primary-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
          }
        />
      </section>
    </main>
  );
}

function Card({
  title,
  description,
  img,
  className,
}: {
  title: string;
  description: string;
  img: string;
  className: string;
}) {
  return (
    <div className={twMerge("bg-white rounded-lg", className)}>
      <div
        className={`flex flex-col items-start rounded-lg bg-line bg-gradient-to-r bg-no-repeat p-7 lg:p-8 shadow`}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 lg:mt-2 pl-[1px] text-[.813rem] leading-[1.769em] opacity-50">
          {description}
        </p>
        <div className="mt-[31px] h-[57px] w-[57px] lg:mt-10 lg:w-16 lg:h-16 self-end">
          <Image src={img} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
}
