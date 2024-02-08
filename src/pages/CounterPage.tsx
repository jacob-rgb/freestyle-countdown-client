import { Button } from "primereact/button";
import useCounter from "../hooks/useCounter";
import { ECountModes } from "../domain/enums/ECountModes";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import "./Count.scss";
import { InputText } from "primereact/inputtext";
import YouTube from "react-youtube";

const initialMode = ECountModes.easy;

export default function CounterPage() {
  const [mode, setMode] = useState<ECountModes>(initialMode);
  const [videoId, setVideoId] = useState<string>('');
  const { count, currentWord, isRunning, inPause, error, startCounter, reloadCounter, stopCounter } =
    useCounter(mode);
  const modes = [
    { name: ECountModes.easy, value: ECountModes.easy },
    { name: ECountModes.hard, value: ECountModes.hard },
    { name: ECountModes.incremental, value: ECountModes.incremental },
  ];

  const handleNewVideo = (videoUrl: string) => {
    const url = new URL(videoUrl);
    const videoId = url.searchParams.get('v');
    videoId && setVideoId(videoId)
  }

  const opts = {
    playerVars: {
      autoplay: 1, // Reproducir automáticamente el video
      showinfo: 0, // No mostrar título ni información del video
      modestbranding: 0, // Mostrar solo el logo mínimo de YouTube
      loop: 1, // Repetir el video en bucle
      fs: 0, // No permitir pantalla completa
      iv_load_policy: 1, // No mostrar anotaciones
    },
  };

  return (
    <div className="flex flex-column align-items-center w-full gap-4 count-wrapper">
      <div className="flex-column flex justify-content-center mt-4 menu">
        <SelectButton
          disabled={isRunning}
          value={mode}
          onChange={(e) => {
            if (!!e.value && e.value != mode) setMode(e.value);
          }}
          optionLabel="name"
          options={modes}
        />
        <p className="p-input-icon-left flex align-self-center w-full	">
          <i className="pi pi-youtube" />
          <InputText className=" w-full" placeholder="Escoge tu música a traves de url de YT" onKeyDown={({key, target}) => key === 'Enter' && handleNewVideo((target as HTMLInputElement).value)} />
        </p>
      </div>
      {(!isRunning && !error) ? (
        <Button className="text-3xl	mt-6 " onClick={() => startCounter()}>
          Empezar
        </Button>
      ) : (
        <Button className="" onClick={() => inPause ? startCounter() : stopCounter()}>
          { inPause ? 'Seguir' : 'Pausar' }
        </Button>
      )}
      {isRunning && (
        <div className="flex flex-column align-items-center justify-content-center gap-4 ">
          <div className="cont">
            <div className={ inPause ? 'spinner paused' : 'spinner'}></div>
            <span className="number">
              <span>{count}</span>{" "}
            </span>
          </div>
          <p className="word">{currentWord}</p>
        </div>
      )}
      {error && (
        <div className="flex flex-column align-items-center">
          <p className="text-xl text-white">Error al cargar la data.</p>
          <Button onClick={() => reloadCounter()}>Recargar</Button>
        </div>
      )}
      {
        videoId && (
          <div className="youtube-player">
            <YouTube className="video" videoId={videoId} opts={opts} />
          </div>
        )
      }
    </div>
  );
}
