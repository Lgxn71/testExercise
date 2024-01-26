import { Button } from "../Button/button";
import Input from "../Input/Input";

// * промежуточный компонент для модального окна
// ? в ТЗ не указано хендлить стейт сабмишена, поэтому не стал делать. 

const CardModalPostJob = ({ onCloseModal }: { onCloseModal: () => void }) => (
  <div className="fixed left-1/2 top-1/2 z-30 w-[510px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white">
    <h2 className="border-b border-gray-300 px-[25px] py-[20px] text-base font-medium capitalize leading-7 text-gray-700">
      Post a job
    </h2>
    <form>
      <div className="flex w-full flex-col px-[25px] py-[20px] text-base font-medium ">
        <label className="pb-3" htmlFor="jobTitle">
          Job Title
        </label>
        <Input
          className="mb-[15px] block rounded-[5px] border p-[15px] focus:outline-none"
          id="jobTitle"
          name="jobTitle"
          type="text"
          placeholder="Enter job title"
        />
      </div>
      <div className="flex justify-between border-t border-gray-300 px-[25px] py-[15px]">
        <Button onClick={onCloseModal} variant="outline" type="button">
          Close
        </Button>
        <Button variant="default" type="submit">
          Submit
        </Button>
      </div>
    </form>
  </div>
);
export default CardModalPostJob;
