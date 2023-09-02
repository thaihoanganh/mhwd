/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { cx } from 'class-variance-authority';

const EditorPage = () => {
  const state = {
    welcomeTitle: 'The wedding of',
    groomName: 'Groom Name',
    brideName: 'Bride Name',
  } as const;

  return (
    <div className="min-h-screen mb-20 text-[#5E0202]">
      <section
        style={{
          backgroundImage: `url('/images/banner.png')`,
          backgroundSize: 'cover',
        }}
        className="gap-20 py-20 min-h-screen flex flex-col inset-0 items-center justify-center"
      >
        <h2 className="font-normal text-3xl xl:text-5xl text-[#675E5E]">{state.welcomeTitle}</h2>
        <h3 className="font-medium text-7xl xl:text-9xl text-[#5E0202] font-dancing-script">{state.groomName}</h3>

        <h3 className="font-medium text-7xl xl:text-9xl text-[#5E0202] font-dancing-script">{state.brideName}</h3>
        <h4 className="font-medium text-3xl xl:text-5xl text-[#675E5E]">24 . 12 . 2022</h4>

        <img src="/images/bowtie.png" alt="" width={200} height={20} />
      </section>

      <section className="px-5 w-full max-w-[1200px] pb-20 mx-auto">
        <h3 className="mt-12 text-center text-4xl">Trân trọng kính mời</h3>
        <p className="text-xl text-center mt-12">tới mừng lễ thành hôn cùng gia đình chúng tôi</p>

        <Divider className="mt-12 mx-auto w-[220px]" />
        <Divider className="mt-4" withArrow />

        <div className="flex relative flex-col xl:justify-center xl:flex-row">
          <div className="xl:w-[50%] h-[220px] flex flex-col justify-evenly items-center">
            <p className="text-xl text-center">Vào 10 giờ 00 Thứ Bảy</p>
            <p className="text-5xl text-center">24</p>
            <p className="text-xl text-center">Tháng 12 năm 2022</p>
          </div>
          <Divider className="mt-4 xl:hidden" withArrow />
          <div className="xl:w-[50%] h-[220px] flex flex-col justify-evenly items-center">
            <p className="text-xl text-center">tại địa chỉ</p>
            <p className="text-xl text-center">Trung Tâm Tiệc Cưới Hợp Thành Palace</p>
          </div>

          <img className="absolute top-0 h-full hidden xl:block" src="/images/decorate-flower.png" alt="Decorate" />
        </div>

        <Divider withArrow />
        <Divider className="mt-4 mx-auto w-[220px]" />

        <p className="text-xl mt-6 text-center">Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi!</p>

        <img className="mt-16 mx-auto" src="/images/bowtie.png" alt="" width={200} height={20} />
      </section>

      <section className="mt-12 px-5 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-20">
          <div className="max-w-[680px] w-full text-center mx-auto">
            <p className="text-lg xl:text-4xl">Groom</p>
            <h4 className="text-[#5E0202] text-5xl xl:text-7xl font-dancing-script mt-1">Groom Name</h4>
            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="p-4">
              <img className="rounded-full mx-auto mt-10" src="https://picsum.photos/500" alt="Groom" />
            </div>
          </div>
          <div className="max-w-[680px] w-full text-center mx-auto">
            <p className="text-lg xl:text-4xl">Groom</p>
            <h4 className="text-[#5E0202] text-5xl xl:text-7xl font-dancing-script mt-1">Groom Name</h4>
            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="p-4">
              <img className="rounded-full mx-auto mt-10" src="https://picsum.photos/500" alt="Groom" />
            </div>
          </div>
        </div>

        <img className="mt-16 mx-auto" src="/images/bowtie.png" alt="" width={380} height={40} />
      </section>

      <section className="mt-20 px-5 w-full max-w-[1200px] mx-auto">
        <h5 className="text-3xl xl:text-6xl font-medium xl:text-center">Our Story</h5>

        <div className="mt-20 flex flex-col xl:flex-row justify-between items-center w-full gap-8">
          <div className="xl:w-[50%] xl:min-w-[50%]">
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
          </div>
          <div className="xl:order-[-1]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia exercitationem voluptatem
              consequuntur, voluptatum fugiat dignissimos dolores architecto tempore asperiores nemo dolorum magnam
              velit repellendus quisquam accusamus labore! Illum, quis?
            </p>
          </div>
        </div>
      </section>

      <section className="mt-52 px-5 w-full max-w-[1200px] mx-auto relative">
        <div className="absolute w-[1px] bg-[#5E0202] top-0 bottom-0 md:top-[-20px] md:bottom-[-20px] left-[50px] md:left-[50%] z-[-1]"></div>

        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex relative mt-[60px] flex-col md:flex-row">
            <div className="absolute h-[1px] w-[100px] bg-[#5E0202] left-[30px] md:left-[calc(50%-50px)] top-0 md:top-[30px] before:absolute before:content-[''] before:rounded-full before:left-[-5px] before:top-[-5px] md:before:left-[calc(50%-5px)] before:w-[11px] before:h-[11px] before:bg-[#5E0202]" />

            <div
              className={cx(
                'pl-16 pr-5 pb-10 md:min-w-[50%] pt-5 md:pt-0 md:pr-16 md:pl-5',
                index % 2 === 0 && 'xl:pl-16 xl:pr-5'
              )}
            >
              <h4
                className={cx('text-4xl font-dancing-script md:text-6xl', index % 2 === 0 ? 'text-left' : 'text-right')}
              >
                Lorem ipsum dolor sit
              </h4>
              <p className={cx('mt-4', index % 2 === 0 ? 'text-left' : 'text-right')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam autem quos. Aperiam magni
                voluptatem explicabo eaque ducimus hic, ut reiciendis sit rem velit tenetur quibusdam labore, itaque
                unde tempore.
              </p>
            </div>

            <div className={cx('md:min-w-[50%] md:pl-16 md:pt-3', index % 2 === 0 && 'xl:order-[-1] xl:pl-0 xl:pr-16')}>
              <p
                className={cx(
                  'text-2xl absolute top-[-40px] left-[60px] md:static',
                  index % 2 === 0 && 'xl:text-right'
                )}
              >
                20/09/2020
              </p>
              <img className="w-full rounded-lg md:mt-8" src="https://picsum.photos/600/450" alt="" />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-52 px-5 w-full max-w-[1200px] mx-auto relative">
        <h2 className="text-4xl xl:text-6xl text-center font-medium">Lorem ipsum dolor sit</h2>

        <div className="grid grid-cols-2 gap-4 mt-20">
          <div className="flex flex-col gap-4">
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
            <img className="w-full rounded-lg" src="https://picsum.photos/600/450" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-52 px-5 w-full max-w-[1200px] mx-auto relative">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center">Lorem ipsum dolor sit</h2>

        <div className="mt-20 xl:flex xl:pl-0 xl:gap-6 pl-9">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="pl-16 xl:pl-0 pt-2 pb-20 relative">
              <div className="flex gap-3 absolute top-[-32px] xl:flex-col xl:items-center xl:w-full xl:static xl:gap-1">
                <p className="text-xl">09:00</p>
                <p className="text-xl">24/12/2022</p>
              </div>

              <div className="absolute top-0 bottom-0 w-[1px] bg-[#5E0202] left-0 xl:static xl:flex xl:items-end xl:h-[120px] xl:mx-auto xl:my-2">
                <div className="absolute h-[1px] w-[80px] bg-[#5E0202] xl:w-full xl:left-0 before:content-[''] xl:before:left-[calc(50%-6px)] before:absolute before:w-[11px] before:h-[11px] before:bg-[#5E0202] before:rounded-full before:top-[-5px] before:left-[-5px]" />
              </div>

              <p className="text-xl xl:text-4xl font-dancing-script xl:text-center">Lorem ipsum</p>
              <p className="mt-2 xl:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti. Iusto suscipit minima dolorem
                odit, hic laudantium quo veritatis, in quisquam vitae veniam optio quas repudiandae cupiditate ipsum
                eveniet! Voluptatem.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-5 w-full max-w-[1200px] mx-auto relative">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center">Cảm ơn các bạn rất nhiều!</h2>

        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti. Iusto suscipit minima dolorem odit,
          hic laudantium quo veritatis, in quisquam vitae veniam optio quas repudiandae cupiditate ipsum eveniet!
          Voluptatem.
        </p>
      </section>
    </div>
  );
};

const Divider = ({ className, withArrow }: { className?: string; withArrow?: boolean }) => {
  return (
    <div
      className={cx(
        'h-[1px] relative w-full bg-[#5E0202]',
        withArrow &&
          "before:absolute before:content-[''] before:w-[7px] before:h-[7px] before:top-[-3px] before:left-[-7px] before:rotate-45 before:bg-[#5E0202] after:absolute after:content-[''] after:w-[7px] after:h-[7px] after:top-[-3px] after:right-[-7px] after:rotate-45 after:bg-[#5E0202]",
        className
      )}
    ></div>
  );
};
export default EditorPage;
