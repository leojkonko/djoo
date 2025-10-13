import React from "react";
import Image from "next/image";

interface ScheduleItem {
  time: string;
  title: string;
  stage?: string;
  subtitle?: string;
  isBreak?: boolean;
}

interface ScheduleProps {
  title: string;
  subtitle: string;
  scheduleData: ScheduleItem[];
  headerImage?: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  title,
  subtitle,
  scheduleData,
  headerImage,
}) => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {headerImage && (
        <div className="w-full">
          <Image
            src={headerImage}
            alt={title}
            width={1080}
            height={1920}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
        <h2 className="text-xl text-gray-600 text-center mb-12">{subtitle}</h2>

        <div className="border-t border-gray-300">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 border-b border-gray-300 ${
                item.isBreak ? "mt-12" : ""
              }`}
            >
              {/* Left Side: Time and Stage */}
              <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
                {item.stage && (
                  <p className="text-sm text-gray-500">{item.stage}</p>
                )}
                <p className="text-3xl !font-bold">{item.time}</p>
              </div>

              {/* Right Side: Title and Subtitle */}
              <div className="w-full sm:w-3/4 text-left sm:text-right">
                <p className="text-xl font-extralight tracking-wider">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-xl font-extralight tracking-wider">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
