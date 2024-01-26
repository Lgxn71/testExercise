import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/button";

// Hero секция сайта

const Hero = () => {
  return (
    <div className="flex gap-[150px] max-[1660px]:gap-[100px] max-[1590px]:gap-[80px] max-[1500px]:gap-[60px] max-[1375px]:gap-[35px] max-[1350px]:gap-[20px]">
      <div className=" pb-[109px]">
        <h1 className="max-w-[652px] pb-6 text-[56px] font-medium leading-[64px] text-gray-900">
          Find a job that suits your interest & skills.
        </h1>
        <p className="max-w-[532px] pb-8 text-lg font-normal text-gray-600">
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in
          scelerisque leo, eget sollicitudin velit bestibulum.
        </p>

        <form className="pb-6">
          <div className=" flex flex-1 items-center justify-evenly gap-3 rounded-lg bg-white  p-3">
            <div className="flex  items-center gap-3">
              <Icon name="SearchSvg" />
              <Input
                className=" pr-78px py-4 focus:outline-none"
                type="text"
                placeholder="Job title, Keyword..."
              />
            </div>

            <div className="h-[56px] border-r" />

            <div className="flex items-center gap-3 pl-[18px]">
              <Icon name="LocationSvg" />
              <Input
                className="py-4 focus:outline-none"
                type="text"
                placeholder="Your Location"
              />
            </div>

            <Button type="submit" size="lg">
              Find Job
            </Button>
          </div>
        </form>

        <p className="font-normal leading-5 text-gray-700">
          <span className=" text-gray-400">Suggestion:</span> Designer,
          Programming,{" "}
          <span className="text-primary-500">Digital Marketing,</span> Video,
          Animation.
        </p>
      </div>

      <div>
        <img
          className=" max-[1340px]:hidden"
          src="/images/pcman.png"
          alt="Person with laptop"
        />
      </div>
    </div>
  );
};
export default Hero;
