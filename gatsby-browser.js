/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/style.css"
import "@fontsource/chakra-petch"
import "@fontsource/fira-sans/200.css"

import React from 'react';
import {AnimatePresence} from 'framer-motion';

const transitionDelay = 600

export const shouldUpdateScroll = () => false

export const onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)

export const wrapPageElement = ({element}) => (
  <AnimatePresence initial={false} exitBeforeEnter>{element}</AnimatePresence>
);