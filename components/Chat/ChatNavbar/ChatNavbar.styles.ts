import { css } from "@emotion/react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const navbar = css`
  display: flex;
  align-items: center;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
`;

export const logo = css`
  font-weight: bold;
`;

export const user = css`
  display: flex;
  gap: 10px;
`;

export const img = css`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
