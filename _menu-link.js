var menuArrs = {
    menuOne: ['河南省', '河北省', '湖南省', '湖北省'],
    menuTwo: [
        {
            menuTwoArrs: ['郑州市', '洛阳市', '安阳市', '新乡市']
        },
        {
            menuTwoArrs: ['石家庄市', '洛阳市', '安阳市']
        },
        {
            menuTwoArrs: ['长沙市', '洛阳市']
        },
        {
            menuTwoArrs: ['武汉市']
        }
    ],
    menuThree: [
        {
            menuThreeArrs: [
                {
                    menuThreeArr: [' 登封市', ' 新密市']
                },
                {
                    menuThreeArr: [' 龙门石窟市', ' 新密市']
                },
                {
                    menuThreeArr: [' 甲骨文市', ' 新密市']
                },
                {
                    menuThreeArr: [' 河师大市', ' 新密市']
                }
            ]
        },
        {
            menuThreeArrs: [
                {
                    menuThreeArr: [' 铁道市', ' 新密市']
                },
                {
                    menuThreeArr: [' 铁道1市', ' 新密市']
                },
                {
                    menuThreeArr: [' 铁道2市', ' 新密市']
                }
            ]
        },
        {
            menuThreeArrs: [
                {
                    menuThreeArr: [' 臭豆腐市', ' 新密市']
                },
                {
                    menuThreeArr: [' 臭豆腐1市', ' 新密市']
                }
            ]
        },
        {
            menuThreeArrs: [
                {
                    menuThreeArr: [' 武大市', ' 新密市']
                }
            ]
        }
    ]
};


//获取三个联动菜单
var mlink1 = document.querySelector('.menu-link1');
var mlink2 = document.querySelector('.menu-link2');
var mlink3 = document.querySelector('.menu-link3');

//初始化联动菜单数据
function renderMenuArr(menuArr, menu) {
    menuArr.forEach(function (item) {
        var mOption = document.createElement("option");
        mOption.text = item;
        mOption.className = "mOption";
        menu.appendChild(mOption);
    });
}


renderMenuArr(menuArrs.menuOne, mlink1);
renderMenuArr(menuArrs.menuTwo[0].menuTwoArrs, mlink2);
renderMenuArr(menuArrs.menuThree[0].menuThreeArrs[0].menuThreeArr, mlink3);


/**
 *
 * @param menuLink1 菜单一
 * @param menuLink2 菜单二
 * @param menuLink3 菜单三
 */

function menuChange(menuLink1,menuLink2,menuLink3 ) {

    var index1, index2;//记录点击菜单一、二的序号
    var menuOneArrs;//获取菜单一对应的数据
    var menuTwoArrs;//获取菜单二对应的数据
    var menuThreeArrs;//获取菜单三对应的数据

    menuOneArrs = menuArrs.menuOne;
    index1 = menuOneArrs.indexOf(menuLink1.value);
    menuTwoArrs = menuArrs.menuTwo[index1].menuTwoArrs;

    //一菜单监听
    menuLink1.onchange=function () {
        index1 = menuOneArrs.indexOf(menuLink1.value);
        menuTwoArrs = menuArrs.menuTwo[index1].menuTwoArrs;
        menuLink2.innerHTML='';//菜单二清空
        renderMenuArr(menuTwoArrs, menuLink2);//渲染菜单二的数据
        index2 = menuTwoArrs.indexOf(menuLink2.value);
        menuThreeArrs = menuArrs.menuThree[index1].menuThreeArrs[index2].menuThreeArr;
        menuLink3.innerHTML='';
        renderMenuArr(menuThreeArrs,menuLink3);
    };

    //二菜单监听
    menuLink2.onchange=function () {
        index2 = menuTwoArrs.indexOf(menuLink2.value);
        menuThreeArrs = menuArrs.menuThree[index1].menuThreeArrs[index2].menuThreeArr;
        menuLink3.innerHTML='';
        renderMenuArr(menuThreeArrs,menuLink3);
    };
}
menuChange(mlink1,mlink2,mlink3);

