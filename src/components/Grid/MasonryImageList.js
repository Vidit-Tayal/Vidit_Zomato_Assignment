import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';

const MasonryImageList = ({ data }) => {
  return (
    <div style={{ width: "70%" }}>
      <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
          {data.map((item, index) => (
            <Tooltip title={item.desc} key={index}>
              <ImageListItem sx={{ width: "100%", height: "auto" }}>
                <img
                  src={URL.createObjectURL(item.file)}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </ImageListItem>
            </Tooltip>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default MasonryImageList;
