import styled from 'styled-components';

const VideoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  border: 0;
`;

export const StyledVideo = styled.iframe`
border: 0;
  width: 100%;
  max-width: 800px;
  height: 450px; /* Ajuste a altura conforme necessário */
`;

export const VideoDemo = () => {
    return (
        <VideoArea>
            <StyledVideo
                src="https://www.youtube.com/embed/72PpppKKh4o"
                title="Video Demontração E-bike inow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></StyledVideo>
        </VideoArea>
    );
};
