//import React from "react";
import { useState, useContext } from "react";
import { Stack, Typography, Box, useTheme } from "@mui/material";
import { VerifiedBadge } from "../VerifiedBadge/VerifiedBadge";
import Image from "next/image";
import IProfileSideBar from "./ProfileSideBar.interface";
import { Rank, Score } from "@/assets/index";
import FollowersService from "@/service/Followers/Followers.service";
import { useQuery } from "react-query";
import IFollowerCount from "@/service/Followers/Follower.interface";
import { VERIFICATION_STATUS } from "@/constants/verificationStatus";
import COLORS from "@/themes/colors";
import COLORSDARK from '@/themes/colorDark';
import { MyContext } from 'src/pages/_app'

const ProfileSideBar = ({ profile, userId }: IProfileSideBar) => {
  const theme = useTheme();
  const { themeType, setThemeType } = useContext(MyContext);
  const { data } = useQuery<IFollowerCount, Error>(
    `follow-count ${userId}`,
    async () => {
      return await FollowersService.getFollowersCount(userId || "");
    }
  );

  let followCount = data?.followersCount;
  return (
//这是profile左边的中间按钮
    <>
    <Box 
    bgcolor={theme.sideBarBg}
    width="100%"
    height="100%"
    >
      {profile?.verificationStatus == VERIFICATION_STATUS.KYC_COMPLETE && (
        <VerifiedBadge />
      )}
      <Stack direction="row" justifyContent="center" marginTop={2}>
        <Stack
          sx={{
            borderRadius: 3,
            bgcolor: themeType === 'light' ? `${COLORS.followersColor}` : `${COLORSDARK.followersColor}`,
            height: 44,
            width: 170,
            marginTop: 1,
            justifyContent: "center",
          }}
        >
          <Typography align="center" sx={{ fontWeight: 600 }}>
            {followCount} Followers
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" marginTop={2}>
        <Stack
          direction="row"
          sx={{
            borderRadius: 3,
            bgcolor: themeType === 'light' ? `${COLORS.reputationColor}` : `${COLORSDARK.reputationColor}`,
            //`${COLORS.reputationColor}`,
            height: 74,

            width: 170,
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            margin={1}
            // sx={{ marginLeft: "4px" }}
          >
            <Image
              src={Score || "Score"}
              alt={"Score"}
              width={30}
              height={30}
            />
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Typography sx={{ fontSize: 21, marginLeft: 2, fontWeight: 600 }}>
              {profile?.score}
            </Typography>
            <Typography sx={{ fontSize: 12, marginLeft: 2 }}>
              Reputation Score
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" marginTop={2}>
        <Stack
          direction="row"
          sx={{
            borderRadius: 3,
            bgcolor:  themeType === 'light' ? `${COLORS.userRanking}` : `${COLORSDARK.userRanking}`,
            //`${COLORS.userRanking}`,
            height: 74,

            width: 170,
          }}
        >
          <Stack direction="column" justifyContent="center" margin={1}>
            <Image src={Rank || "Rank"} alt={"Rank"} width={30} height={30} />
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Typography
              sx={{
                fontSize: 21,
                fontWeight: 600,
                marginRight: 4,
                marginLeft: 2,
              }}
            >
              {profile?.rank ?? "N/A"}
            </Typography>
            <Typography sx={{ fontSize: 12, marginRight: 4, marginLeft: 2 }}>
              User Rank
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      </Box>
    </>
  );
};

export { ProfileSideBar };
