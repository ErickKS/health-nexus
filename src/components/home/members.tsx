"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { DialogWithoutAction } from "../radix/dialog";
import clsx from "clsx";
import { Link } from "lucide-react";

const members = [
  {
    name: "Eduardo Ferreira Silva de Jesus",
    rm: "RM: 98410",
    role: "Desenvolvedor Back-End",
  },
  {
    name: "Erick Kuwahara da Silva",
    rm: "RM: 550371",
    role: "Desenvolvedor Front-End",
  },
  {
    name: "Guilherme Carneiro de Matos",
    rm: "RM: 98874",
    role: "Desenvolvedor Back-End",
  },
  {
    name: "Gustavo Costa Mieczkowsky",
    rm: "RM: 99102",
    role: "Desenvolvedor Back-End",
  },
  {
    name: "Matheus Octaviano Abes de Camargo Silva",
    rm: "RM: 98502",
    role: "Desenvolvedor Back-End",
  },
];

export function Members() {
  const [openDialog, setOpenDialog] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <button
        onClick={() => setOpenDialog(!openDialog)}
        className="flex justify-center items-center h-10 px-6 bg-white rounded-full font-medium shadow-main"
      >
        Conheça nosso grupo
      </button>

      <DialogWithoutAction open={openDialog} setOpen={setOpenDialog} title="Integrantes">
        <div className="flex flex-col gap-2 max-w-[320px] px-4">
          <div ref={sliderRef} className="keen-slider bg-blue-light rounded-md">
            {members.map(({ name, rm, role }) => (
              <div key={rm} className="keen-slider__slide flex flex-col items-center justify-center text-center gap-2 p-4">
                <h4>{name}</h4>
                <span className="font-medium">{rm}</span>
                <span className="font-medium">{role}</span>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {/* @ts-ignore */}
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "") + " shadow-main"}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </DialogWithoutAction>
    </>
  );
}
