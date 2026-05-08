// 樱沫杂交台 - 工蜂+工蜂=雄蜂, 雄蜂+雄蜂=蜂王
// 输入: slot 10, 11  输出: slot 15
var WORKER_IDS = [
    "YINGMO_BEE_G_COB","YINGMO_BEE_G_COL","YINGMO_BEE_G_IRN","YINGMO_BEE_G_COP",
    "YINGMO_BEE_G_GLD","YINGMO_BEE_G_RED","YINGMO_BEE_G_LAP","YINGMO_BEE_G_NQZ",
    "YINGMO_BEE_G_NIN"
];

var DRONE_IDS = [
    "YINGMO_BEE_X_IDS","YINGMO_BEE_X_GDS","YINGMO_BEE_X_CDS","YINGMO_BEE_X_TDS",
    "YINGMO_BEE_X_SDS","YINGMO_BEE_X_ADS","YINGMO_BEE_X_LDS","YINGMO_BEE_X_ZDS",
    "YINGMO_BEE_X_MDS","YINGMO_BEE_X_SLF"
];

var QUEEN_IDS = [
    "YINGMO_BEE_W_STL","YINGMO_BEE_W_BRZ","YINGMO_BEE_W_DMG","YINGMO_BEE_W_HDM",
    "YINGMO_BEE_W_RAI","YINGMO_BEE_W_CBI","YINGMO_BEE_W_SDI","YINGMO_BEE_W_BLN",
    "YINGMO_BEE_W_BRS","YINGMO_BEE_W_ABS","YINGMO_BEE_W_ABZ","YINGMO_BEE_W_DLN",
    "YINGMO_BEE_W_NKL","YINGMO_BEE_W_CBT","YINGMO_BEE_W_GDI","YINGMO_BEE_W_RDA",
    "YINGMO_BEE_W_SID","YINGMO_BEE_W_SIE"
];

var BEE_SLOT_1 = 10;
var BEE_SLOT_2 = 11;
var OUT_SLOT = 15;
var ENERGY_COST = 500;

function isWorker(id) {
    for (var i = 0; i < WORKER_IDS.length; i++) {
        if (WORKER_IDS[i] == id) return true;
    }
    return false;
}

function isDrone(id) {
    for (var i = 0; i < DRONE_IDS.length; i++) {
        if (DRONE_IDS[i] == id) return true;
    }
    return false;
}

function tick(info) {
    try {
        var block = info.block();
        var menu = info.blockMenu();
        var machine = info.machine();
        var loc = block.getLocation();

        // 检查电量
        var charge = machine.getCharge(loc);
        if (charge < ENERGY_COST) return;

        // 检查输入槽
        var item1 = menu.getItemInSlot(BEE_SLOT_1);
        var item2 = menu.getItemInSlot(BEE_SLOT_2);
        if (item1 == null || item2 == null) return;

        // 检查输出槽是否为空
        var outItem = menu.getItemInSlot(OUT_SLOT);
        if (outItem != null) return;

        // 识别蜜蜂类型
        var sf1 = SlimefunItem.getByItem(item1);
        var sf2 = SlimefunItem.getByItem(item2);
        if (sf1 == null || sf2 == null) return;

        var id1 = sf1.getId();
        var id2 = sf2.getId();

        // 判断杂交组合
        var resultId = null;
        if (isWorker(id1) && isWorker(id2)) {
            resultId = DRONE_IDS[Math.floor(Math.random() * DRONE_IDS.length)];
        } else if (isDrone(id1) && isDrone(id2)) {
            resultId = QUEEN_IDS[Math.floor(Math.random() * QUEEN_IDS.length)];
        } else {
            return;
        }

        // 执行杂交：消耗电量和蜜蜂
        machine.removeCharge(loc, ENERGY_COST);
        item1.setAmount(item1.getAmount() - 1);
        item2.setAmount(item2.getAmount() - 1);

        // 产出蜜蜂：使用SlimefunItem.getById获取物品
        var sfResult = SlimefunItem.getById(resultId);
        if (sfResult != null) {
            var resultItem = sfResult.getItem().clone();
            menu.pushItem(resultItem, Java.to([OUT_SLOT], "int"));
        }
    } catch (e) {
        console.log("杂交台错误: " + e);
    }
}
