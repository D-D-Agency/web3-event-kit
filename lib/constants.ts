/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://web3-event-kit.vercel.app';
// TODO: add SITE_ORIGIN
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'd_d_agency_web3';
export const BRAND_NAME = 'D_D Agency';
export const SITE_NAME_MULTILINE = ['Agency', 'Conf'];
export const SITE_NAME = 'Agency Conf';
export const META_DESCRIPTION =
  'This is an open source project that Next.js developers can clone, deploy, and fully customize for web3 native events. Created through collaboration of marketers, designers, and developers at Vercel with a web3 touch from D_D Agency.';

export const TWEET_TEXT = META_DESCRIPTION;
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';

// TODO: replace dates
export const DATE = '01 January 2022';
export const SHORT_DATE = 'Jan 1 - 9:00am PST';
export const FULL_DATE = 'Jan 1st 9am Pacific Time (GMT-7)';

// TODO: decide what to do with cookies
export const COOKIE = 'user-id';

// TODO: Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

// TODO: Add link to CODE_OF_CONDUCT
export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/D-D-Agency/web3-event-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'Agency Stage',
    route: '/stage/c'
  },
  // {
  //   name: '100ms Stage',
  //   route: '/stage/m'
  // },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
