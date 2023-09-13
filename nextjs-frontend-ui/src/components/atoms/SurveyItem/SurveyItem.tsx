import { DescriptionOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React, { useContext } from 'react'
import { MyContext } from 'src/pages/_app'
import INotificationItem from "./SurveyItem.interface";
import COLORS from "@/themes/colors";
import COLORSDARK from '@/themes/colorDark'

const SurveyItem = ({
  onClick,
  visibility,
  actionType,
  surveyItem,
}: INotificationItem) => {

  const { themeType } = useContext(MyContext)
  
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding={3}
      border={"1px solid " + COLORS.greyBorder}
      borderRadius={"8px"}
      alignItems="center"
      mb={1}
    >
      <Stack direction="row" gap={1} paddingRight={2}>
        <DescriptionOutlined />
        <Typography>{surveyItem.surveyTitle}</Typography>
      </Stack>
      <Button
        variant="outlined"
        sx={{
          minWidth: 120,
          color: themeType === 'light' ? COLORS.primary : COLORSDARK.themeBaseTextColor,
        }}
        onClick={onClick}
      >
        {actionType == "getStarted" ? "Get Started" : "View"}
      </Button>
    </Stack>
  );
};

export { SurveyItem };
