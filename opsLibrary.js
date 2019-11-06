/*
====Develop====
    version：0.0.0
    Features：{
        1. id 或 class 抓取DOM
        2. 快速操作DOM => class之類的
    }
*/




(function (global) {
    var Opshell = function (eln) { 
        return new Opshell.init(eln);
    }

    // 函式庫私有常數宣告
    const errorMsg = {
        unexist: '不存在',
        typeEr: '型態錯誤'
    };

    // 函式庫私有變數
    let elType = 'document';

    // Method宣告
    Opshell.prototype = {
        hasC: function (className) {
            this.el.classList.contains(className);

            return this;
        },
        addC: function (className){
            this.el.classList.add(className);

            return this;
        },
        removeC: function (className){
            this.el.classList.remove(className);

            return this;
        },
        toggleC: function (className) { 
            this.el.classList.toggle(className);

            return this;
        }
    }

    Opshell.init = function (eln) { 
        var ths = this;
        ths.eln = eln || 'document';
        ths.el = document;

        // 判斷選擇器
        if (ths.eln.indexOf(".") != -1) {// 如果是class
            ths.el = document.querySelector(eln);
            elType = 'class';
        } else if (ths.eln.indexOf("#") != -1) {// 如果是id
            ths.el = document.getElementById(eln);
            elType = 'id';
        }
    }



    Opshell.init.prototype = Opshell.prototype;
    //縮寫 new 物件
    global.Opshell = global.ops = Opshell;
})(window);