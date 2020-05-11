import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import EmperorSection from '../emperorSection/index';

const emperors = [
  {
    title: '明太祖-朱元璋',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/%E6%98%8E%E5%A4%AA%E7%A5%96%E7%94%BB%E5%83%8F.jpg/500px-%E6%98%8E%E5%A4%AA%E7%A5%96%E7%94%BB%E5%83%8F.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%9C%B1%E5%85%83%E7%92%8B'
  }, {
    title: '明惠宗-朱允炆',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Jianwen_Emperor.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E5%BB%BA%E6%96%87%E5%B8%9D'
  }, {
    title: '明成祖-朱棣',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anonymous-Ming_Chengzu.jpg/1024px-Anonymous-Ming_Chengzu.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E6%88%90%E7%A5%96'
  }, {
    title: '明仁宗-朱高炽',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/MingRenzongPortrait.jpg/1024px-MingRenzongPortrait.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E4%BB%81%E5%AE%97'
  }, {
    title: '明宣宗-朱瞻基',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Xuanzong_of_Ming.jpg/500px-Xuanzong_of_Ming.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E5%AE%A3%E5%AE%97'
  }, {
    title: '明英宗-朱祁镇',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MingYingzong1.jpg/500px-MingYingzong1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E8%8B%B1%E5%AE%97'
  }, {
    title: '明代宗-朱祁钰',
    imgUrl: 'https://bkimg.cdn.bcebos.com/pic/d000baa1cd11728b8b1e527ac7fcc3cec3fd2cb3?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxNTA=,xp_5,yp_5',
    link: 'https://zh.wikipedia.org/wiki/%E6%99%AF%E6%B3%B0%E5%B8%9D'
  }, {
    title: '明宪宗-朱见深',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MingXianzong1.jpg/440px-MingXianzong1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E5%AE%AA%E5%AE%97'
  }, {
    title: '明孝宗-朱祐樘',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hongzhi1.jpg/500px-Hongzhi1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E5%AD%9D%E5%AE%97'
  }, {
    title: '明武宗-朱厚照',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ming_Wuzong.jpg/500px-Ming_Wuzong.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E6%AD%A6%E5%AE%97'
  }, {
    title: '明世宗-朱厚熜',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jiajing.jpg/440px-Jiajing.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E4%B8%96%E5%AE%97'
  }, {
    title: '明穆宗-朱载坖',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MingMuzong1.jpg/500px-MingMuzong1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E7%A9%86%E5%AE%97'
  }, {
    title: '明神宗-朱翊钧',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/MingShenzong1.jpg/1280px-MingShenzong1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E7%A5%9E%E5%AE%97'
  }, {
    title: '明光宗-朱常洛',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/MingGuangzong1.jpg/500px-MingGuangzong1.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E5%85%89%E5%AE%97'
  }, {
    title: '明熹宗-朱由校',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/TianqiZhe.jpg/500px-TianqiZhe.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E6%98%8E%E7%86%B9%E5%AE%97'
  }, {
    title: '明思宗-朱由检',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/%E6%98%8E%E6%80%9D%E5%AE%97%E5%9D%90%E5%83%8F_%E8%BB%B8.jpg/500px-%E6%98%8E%E6%80%9D%E5%AE%97%E5%9D%90%E5%83%8F_%E8%BB%B8.jpg',
    link: 'https://zh.wikipedia.org/wiki/%E5%B4%87%E7%A6%8E%E5%B8%9D'
  }
];

class EmperorList extends Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {
                emperors.map(emperor => {
                  return <EmperorSection emperor={emperor} fullpageApi={fullpageApi} key={emperor.title} />
                })
              }
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}

export default EmperorList;