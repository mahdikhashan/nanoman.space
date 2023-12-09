import { format } from 'date-fns';

export const PostTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-4 md:flex-row md:items-center">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {`${'First Name'} ${'Last Name'}`} /{' '}
            {format(new Date(), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {2} • <span>{3} views</span>
        </p>
      </div>
    </>
  );
};
