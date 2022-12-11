import imageCompression from "browser-image-compression";

const imageCompress = async (imageFile, setImagePreview) => {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);

    const reader = new FileReader();

    reader.readAsDataURL(compressedFile);

    reader.onloadend = () => {
      const base64data = reader.result;
      setImagePreview(base64data);
    };
  } catch (error) {
    console.log(error);
  }
};

export default imageCompress;
