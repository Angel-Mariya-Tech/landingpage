import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const JobFilters = () => {
  const scheduleOptions = [
    { id: "fulltime", label: "Full time", checked: true },
    { id: "parttime", label: "Part time", checked: false },
    { id: "internship", label: "Internship", checked: false },
    { id: "project", label: "Project work", checked: false },
    { id: "volunteer", label: "Volunteering", checked: false }
  ];

  const employmentOptions = [
    { id: "fullday", label: "Full day", checked: true },
    { id: "flexible", label: "Flexible schedule", checked: false },
    { id: "shift", label: "Shift work", checked: false },
    { id: "distant", label: "Distant work", checked: false },
    { id: "rotational", label: "Shift method", checked: false }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary via-primary to-accent p-6 rounded-3xl text-primary-foreground relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold">Get Your Best Profession</h3>
          <p className="mt-2 text-sm opacity-90">with JobConnect</p>
          <Button 
            variant="secondary" 
            className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="bg-card p-6 rounded-3xl border border-border">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold text-lg">Filters</h4>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        <Accordion type="multiple" defaultValue={["schedule", "employment"]} className="w-full">
          <AccordionItem value="schedule" className="border-b border-border">
            <AccordionTrigger className="hover:no-underline py-4">
              <h5 className="font-semibold text-sm">Working schedule</h5>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3">
                {scheduleOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <Checkbox 
                      id={option.id} 
                      defaultChecked={option.checked}
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="employment" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-4">
              <h5 className="font-semibold text-sm">Employment type</h5>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3">
                {employmentOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <Checkbox 
                      id={option.id} 
                      defaultChecked={option.checked}
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
