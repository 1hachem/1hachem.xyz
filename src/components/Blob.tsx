type BlobProps = {
  className: string;
};

const Blob = ({ className }: BlobProps) => {
  return (
    <div
      className={`${className} absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10`}
    ></div>
  );
};

export default Blob;
