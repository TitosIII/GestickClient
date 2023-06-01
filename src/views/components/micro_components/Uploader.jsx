import { useEffect, useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { useParams } from "react-router-dom";

const reader = new FileReader();

export default function Uploader({ values, setFieldValue, initialValues }) {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No has seleccionado una imagen");

  useEffect(()=>{
    setImage(initialValues.img);
  },[initialValues]);

  return (
    <>
      <div
        onClick={() => document.querySelector(".input-field").click()}
        className="UploaderFORM"
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={({ currentTarget: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              reader.onloadend = () => {
                setImage(reader.result);
                setFieldValue("img",files[0]);
              };
              reader.readAsDataURL(files[0])
              console.log(files[0]);
            }
          }}
        />
        <input type="image" name="img" value={values.img} hidden />

        {image ? (
          <img src={image} width={450} height={380} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="#01a7c2" size={60} />
            <h3 style={{ color: "black" }}>Selecciona Una Imagen</h3>
          </>
        )}
      </div>
      <section className="uploaded-row">
        <AiFillFileImage color="#01a7c2" />
        <span>
          {fileName}
          <MdDelete
            onClick={() => {
              setFieldValue("img",null);
              setFileName("No has seleccionado aún");
              setImage(null);
            }}
          />
        </span>
      </section>
    </>
  );
}
