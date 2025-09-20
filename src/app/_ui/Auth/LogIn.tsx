"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import russia from "../../../../public/svg/flag-ru-svgrepo-com.svg";
import belasrus from "../../../../public/svg/flag-for-flag-belarus-svgrepo-com.svg";

export default function LogIn() {
  const [openTel, setOpenTel] = useState(false);
  const [inputTel, setInputTel] = useState("");
  const [tel, setTel] = useState("+7");
  const handleValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < inputTel.length) {
      if (
        e.target.value[e.target.value.length - 1] === "-" ||
        e.target.value[e.target.value.length - 1] === " "
      ) {
        setInputTel(e.target.value.slice(0, e.target.value.length - 1));
      } else {
        setInputTel(e.target.value);
      }
    } else if (Number.isInteger(+e.target.value[e.target.value.length - 1])) {
      if (inputTel.length < 13) {
        if (inputTel.length === 2) {
          setInputTel(e.target.value + " ");
        } else if (inputTel.length === 6) {
          setInputTel(e.target.value + "-");
        } else if (inputTel.length === 9) {
          setInputTel(e.target.value + "-");
        } else {
          setInputTel(e.target.value);
        }
      }
    }
  };
  return (
    <form className="flex flex-col gap-2">
      <h3 className="text-center font-bold">Input your number</h3>
      <p className="text-center opacity-55">On this number send SMS</p>
      <div className="bg-[rgba(255,255,255,0.09)] flex p-2 rounded-[10px]">
        <motion.button
          transition={{ duration: 0.2 }}
          type="button"
          className=" flex cursor-pointer items-center "
          onClick={() => setOpenTel(!openTel)}>
          {tel === "+7" ? (
            <motion.div layout className="flex gap-2">
              <Image src={russia} alt="russia flag" className="w-[20px]" />
              +7
            </motion.div>
          ) : (
            <motion.div transition={{ duration: 0.2 }} className="flex gap-2">
              <Image src={belasrus} alt="russia flag" className="w-[20px]" />
              +375
            </motion.div>
          )}
          {openTel ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
        </motion.button>

        <input
          value={inputTel}
          onChange={handleValidator}
          type="tel"
          id="telephone"
          placeholder="000 000-00-00"
          className=" shadow-2xl pl-5 rounded-[10px] h-[20px] outline-0 "
        />
      </div>{" "}
      <AnimatePresence mode="popLayout">
        {openTel && (
          <div className="flex flex-col i pt-1 gap-[5px]">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              className="hover:bg-[rgba(255,255,255,0.02)] flex gap-2 items-center cursor-pointer p-2 transition-colors duration-150 bg-[rgba(255,255,255,0.09)] rounded-2xl text-start  w-1/1"
              type="button"
              onClick={() => setTel("+7")}>
              <Image src={russia} alt="russia flag" className="w-[20px]" />
              +7 Russia
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 0.2 }}
              className="hover:bg-[rgba(255,255,255,0.02)] flex gap-2 items-center cursor-pointer p-2 bg-[rgba(255,255,255,0.09)] w-1/1 text-start  rounded-2xl transition-colors duration-150"
              type="button"
              onClick={() => setTel("+375")}>
              <Image src={belasrus} alt="russia flag" className="w-[20px]" />
              +375 Belarusi
            </motion.button>
          </div>
        )}
      </AnimatePresence>{" "}
      <motion.p layout className="text-[14px] text-center opacity-50">
        You can select tel from Russia or Belarusi
      </motion.p>
      <button className="bg-(--primary) h-[50px] rounded-[10px] mt-auto cursor-pointer hover:opacity-70 transition-opacity duration-150">
        Send
      </button>
    </form>
  );
}
