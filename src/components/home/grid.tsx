import Link from "next/link";

function Svg1() {
  return (
    <svg width="241" height="318" viewBox="0 0 241 318" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="patternImage1" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlinkHref="/img/home/grid-1.png" width="241" height="318" />
        </pattern>
      </defs>

      <path
        d="M0.5 293.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H94.7979C103.634 0.5 110.798 7.66344 110.798 16.5C110.798 25.3366 117.961 32.5 126.798 32.5H216.5C229.755 32.5 240.5 43.2452 240.5 56.5V293.5C240.5 306.755 229.755 317.5 216.5 317.5H24.5C11.2452 317.5 0.5 306.755 0.5 293.5Z"
        fill="url(#patternImage1)"
      />
    </svg>
  );
}

function Svg2() {
  return (
    <svg width="240" height="286" viewBox="0 0 240 286" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="patternImage2" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlinkHref="/img/home/grid-2.png" width="240" height="286" />
        </pattern>
      </defs>

      <path
        d="M0 262V24.5C0 11.2452 10.7452 0.5 24 0.5H94.2979C103.134 0.5 110.298 7.66344 110.298 16.5C110.298 25.3366 117.461 32.5 126.298 32.5H216C229.255 32.5 240 43.2452 240 56.5V262C240 275.255 229.255 286 216 286H24C10.7452 286 0 275.255 0 262Z"
        fill="url(#patternImage2)"
      />
    </svg>
  );
}

function Svg3() {
  return (
    <svg width="240" height="286" viewBox="0 0 240 286" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="patternImage3" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlinkHref="/img/home/grid-3.png" width="240" height="286" />
        </pattern>
      </defs>

      <path
        d="M240 262V24.5C240 11.2452 229.255 0.5 216 0.5H145.702C136.866 0.5 129.702 7.66344 129.702 16.5C129.702 25.3366 122.539 32.5 113.702 32.5H24C10.7452 32.5 0 43.2452 0 56.5V262C0 275.255 10.7452 286 24 286H216C229.255 286 240 275.255 240 262Z"
        fill="url(#patternImage3)"
      />
    </svg>
  );
}

function Svg4() {
  return (
    <svg width="240" height="317" viewBox="0 0 240 317" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="patternImage4" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlinkHref="/img/home/grid-4.png" width="240" height="317" />
        </pattern>
      </defs>

      <path
        d="M240 293V24C240 10.7452 229.255 0 216 0H145.702C136.866 0 129.702 7.16344 129.702 16C129.702 24.8366 122.539 32 113.702 32H24C10.7451 32 -1.52588e-05 42.7452 -1.52588e-05 56V293C-1.52588e-05 306.255 10.7452 317 24 317H216C229.255 317 240 306.255 240 293Z"
        fill="url(#patternImage4)"
      />
    </svg>
  );
}

export function Grid() {
  return (
    <div className="grid items-end justify-center gap-5 grid-cols-[240px_240px] sm:grid-cols-[240px_208px_240px] xl:grid-cols-[240px_240px_208px_240px_240px]">
      <div className="max-xl:hidden">
        <Svg1 />
      </div>
      <div>
        <Svg2 />
      </div>

      <div className="hidden flex-col justify-between h-[252px] pt-[50px] pb-3 px-3 bg-blue-light rounded-3xl font-medium shadow-md sm:flex">
        <span className="text-xl">Entre em nossa plataforma</span>

        <Link href={"/autenticacao/login"} className="flex justify-center items-center h-10 px-6 bg-white rounded-full shadow-main">
          Entrar
        </Link>
      </div>

      <div>
        <Svg3 />
      </div>
      <div className="max-xl:hidden">
        <Svg4 />
      </div>
    </div>
  );
}
