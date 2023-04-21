import { IconType } from 'react-icons';
// import { FiTrash } from 'react-icons/fi';

interface ArticleCardProps {
  icon: IconType;
}

function ArticleCard({ icon: Icon }: ArticleCardProps) {
  return (
    <>
      <div className="w-full bg-gray-900 rounded-lg shadow-md p-6 my-6 mx-auto hover:bg-gray-800 hover:cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl">
              Title: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi quis quas autem iusto maiores cumque placeat repellendus
              nisi vel maxime!
            </h3>
            <h4 className="my-5 text-base sm:text-lg md:text-xl lg:text-xl">
              Journal Name: Lorem ipsum dolor sit amet.
            </h4>
            <h4 className="my-5 text-base sm:text-lg md:text-xl lg:text-xl">
              Publication Year: 2023
            </h4>
          </div>
          <div
            className={`rounded-lg ml-2 h-10 text-center flex items-center justify-center px-2 ${
              Math.random() ? 'bg-gray-700' : 'bg-gray-900'
            }`}
          >
            <Icon
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white hover:text-gray-300 cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
