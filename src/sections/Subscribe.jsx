import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-col justify-between items-center gap-10"
    >
      <h3 className="text-3xl leading-[48px] font-palanquin font-bold text-center">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>

      <div className="w-full flex items-center gap-5 p-2.5 border border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input"
        />

        <div className="flex items-center">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe; 