import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import projectList from "../../../utils/projectList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "80vh",
  border: "none",
  boxShadow: 90,
  p: 1,
};

function ProjectModal({ setOpen, open, projectId }) {
  const handleClose = () => setOpen(false);

  const findProject = projectList.filter(
    (project) => project?.id === projectId
  );

  let content = null;

  content = findProject.map((project, idx) => {
    const { name, image, category, link, source } = project || {};
    return (
      <>
        <div
          className="min-h-[20vh] max-h-[45vh] overflow-hidden scrollbar-hide rounded-lg"
          key={idx}
        >
          <img src={image} alt={name} />
        </div>
        <div className="py-3 px-3">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="capitalize font-medium"
          >
            {name}
          </Typography>
          <div>
            <span className="font-medium">Using:</span>{" "}
            {category.map((cat, idx) => (
              <span key={idx}>{(idx ? ", " : "") + cat}</span>
            ))}
          </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          {(link || source) && (
            <div className="mt-3">
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <button class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                    <i class="fa-solid fa-share-from-square mr-2"></i>
                    <span>Live Preview</span>
                  </button>
                </a>
              )}{" "}
              {source && (
                <a href={source} target="_blank" rel="noreferrer">
                  <button class="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                    <i class="fa-brands fa-github mr-2"></i>
                    <span>Github</span>
                  </button>
                </a>
              )}{" "}
            </div>
          )}
        </div>
      </>
    );
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-[96%] md:w-[700px] outline-none rounded-xl overflow-x-auto  scrollbar-hide dark:text-white bg-gray-50 dark:bg-[#1f2937]"
        >
          <button
            className="absolute top-3 right-3 h-8 w-8 dark:bg-[#464f56] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[#27282f] dark:text-white text-gray-700 rounded-full"
            onClick={handleClose}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          {content}
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;
