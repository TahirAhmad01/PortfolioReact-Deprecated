import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import projectList from "../../../utils/projectList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "none !important",
  boxShadow: 24,
  p: 4,
};

function ProjectModal({ setOpen, open, projectId }) {
  const handleClose = () => setOpen(false);

  const findProject = projectList.filter(
    (project) => project?.id === projectId
  );

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
          className="w-[96%] md:w-[700px] outline-none rounded-lg"
        >
          {findProject.map((project) => (
            <>
              <div className="max-h-[45vh] overflow-y-auto">
                <img src={project.image} alt={project.name} />
              </div>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="mt-3"
              >
                {project?.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;
