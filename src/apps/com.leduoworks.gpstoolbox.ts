import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.leduoworks.gpstoolbox',
  name: 'GPS工具箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13062600',
    },
    {
      key: 1,
      name: '首页占位广告',
      activityIds: 'com.leduoworks.gpstoolbox.frmt.MainFrmtActivity',

      quickFind: true,
      rules: '[id="com.leduoworks.gpstoolbox:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13062612',
    },
  ],
});
