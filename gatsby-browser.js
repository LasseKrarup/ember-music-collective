/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/style.css"
import "@fontsource/chakra-petch"
import "@fontsource/fira-sans/200.css"
import moment from "moment"
import 'moment/dist/locale/da';
import localization from 'moment/locale/fr';



import React from 'react';
import {AnimatePresence} from 'framer-motion';

// moment.locale("da")
moment.updateLocale('da', localization);

const transitionDelay = 600

export const shouldUpdateScroll = () => false

export const onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)

export const wrapPageElement = ({element}) => (
  <AnimatePresence initial={false} exitBeforeEnter>{element}</AnimatePresence>
);