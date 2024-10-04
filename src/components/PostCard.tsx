"use client";

// /components/VideoCard.tsx
import React, { Component } from "react";

import { Chip, Image } from "@nextui-org/react";
import Video from "next-video";
import bodaHub from "/videos/bodaHub.mp4";
import Player from "next-video/player";
import { RiTv2Line } from "react-icons/ri";
import ReactPlayer from "react-player";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface PostCardProps {
  title: string;
  videoURL: string;
  category: string;
}

export default function PostCard({ title, videoURL, category }: PostCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-28 bg-blend-soft-light bg-white backdrop-blur shadow-sm">
      <div className="leading-0">
        <div className=" aspect-square ">
          <CldVideoPlayer
            showJumpControls={true}
            muted={false}
            width="1920"
            height="1080"
            src={videoURL}
          />

          <div className="p-6 cursor-pointer">
            <div className="mb-2 flex items-center gap-5">
              <Chip
                className="bg-emerald-50 px-2 text-emerald-800"
                size="sm"
                radius="sm"
                startContent={
                  <RiTv2Line className="text-2xl text-emerald-600 h-4 w-4 mr-2 pointer-events-none flex-shrink-0" />
                }
              >
                {category}
              </Chip>
            </div>

            <h3 className=" p-2 font-bold text-lg tracking-normal">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
