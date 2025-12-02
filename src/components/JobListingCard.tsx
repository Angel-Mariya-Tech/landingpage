import { Button } from "@/components/ui/button";
import { MapPin, Bookmark } from "lucide-react";
import { useState } from "react";

interface JobListingCardProps {
  date: string;
  company: string;
  title: string;
  tags: string[];
  salary: string;
  location: string;
  bgColor: string;
  tagColor: string;
  textColor: string;
}

export const JobListingCard = ({
  date,
  company,
  title,
  tags,
  salary,
  location,
  bgColor,
  tagColor,
  textColor
}: JobListingCardProps) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className={`${bgColor} p-6 rounded-3xl flex flex-col h-full border border-border/20 hover:border-primary/50 transition-all duration-300 group`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className={`text-sm ${textColor}`}>{date}</p>
          <p className={`text-sm font-semibold mt-2 ${textColor}`}>{company}</p>
          <h4 className="text-xl font-bold mt-1 text-gray-800 dark:text-foreground">{title}</h4>
        </div>
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-primary text-primary' : ''}`} />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${tagColor} px-3 py-1 rounded-full text-xs font-medium`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex justify-between items-end">
        <div>
          <p className="font-bold text-lg text-gray-800 dark:text-foreground">{salary}</p>
          <p className="text-sm text-gray-600 dark:text-muted-foreground flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </p>
        </div>
        <Button variant="default" className="bg-[#1E293B] hover:bg-black dark:bg-secondary dark:hover:bg-secondary/80 text-white font-semibold">
          Details
        </Button>
      </div>
    </div>
  );
};
