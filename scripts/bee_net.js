// 捕蜂网 - 右键原版蜜蜂捕获工蜂，35%成功率，失败中毒5秒
var WORKER_IDS = [
    "YINGMO_BEE_G_COB","YINGMO_BEE_G_COL","YINGMO_BEE_G_IRN","YINGMO_BEE_G_COP",
    "YINGMO_BEE_G_GLD","YINGMO_BEE_G_RED","YINGMO_BEE_G_LAP","YINGMO_BEE_G_NQZ",
    "YINGMO_BEE_G_NIN"
];

var BEE_NAMES = {
    "YINGMO_BEE_G_COB": "\u00a7d樱野石蜂",
    "YINGMO_BEE_G_COL": "\u00a7d樱野炭蜂",
    "YINGMO_BEE_G_IRN": "\u00a7d樱野铁蜂",
    "YINGMO_BEE_G_COP": "\u00a7d樱野铜蜂",
    "YINGMO_BEE_G_GLD": "\u00a7d樱野金蜂",
    "YINGMO_BEE_G_RED": "\u00a7d樱野红石蜂",
    "YINGMO_BEE_G_LAP": "\u00a7d樱野青蜂",
    "YINGMO_BEE_G_NQZ": "\u00a7d樱界石英蜂",
    "YINGMO_BEE_G_NIN": "\u00a7d樱界合金蜂"
};

var SUCCESS_RATE = 0.35;

function onUse(event) {
    try {
        event.cancel();
        var player = event.getPlayer();
        var loc = player.getLocation();
        var nearby = loc.getWorld().getNearbyEntities(loc, 5, 5, 5);
        var bee = null;
        var iter = nearby.iterator();
        while (iter.hasNext()) {
            var e = iter.next();
            if (e.getType().name() == "BEE") {
                bee = e;
                break;
            }
        }
        if (bee == null) {
            player.sendMessage("\u00a7d樱风拂过林间\u00a7f，\u00a7b貌似附近并没有蜂灵");
            return;
        }
        // 判定成功率
        if (Math.random() < SUCCESS_RATE) {
            // 成功
            var beeId = WORKER_IDS[Math.floor(Math.random() * WORKER_IDS.length)];
            var sfItem = SlimefunItem.getById(beeId);
            if (sfItem == null) {
                player.sendMessage("\u00a7c蜜蜂物品不存在: " + beeId);
                return;
            }
            var beeItem = sfItem.getItem().clone();
            bee.remove();
            player.getWorld().dropItemNaturally(player.getLocation(), beeItem);
            var beeName = BEE_NAMES[beeId] || beeId;
            player.sendMessage("\u00a7d樱风拂过林间\u00a7f，\u00a7b温顺的野外蜂灵被你收入囊中");
            player.sendMessage("\u00a7f是" + beeName + "\u00a7f工蜂\u00a7d，好哎o(*≧▽≦)ツ");
        } else {
            // 失败 - 中毒5秒 + 反胃5秒 + 失明5秒
            bee.remove();
            var PotionEffectType = Java.type("org.bukkit.potion.PotionEffectType");
            var PotionEffect = Java.type("org.bukkit.potion.PotionEffect");
            var poison = new PotionEffect(PotionEffectType.POISON, 200, 0);
            var confusion = new PotionEffect(PotionEffectType.NAUSEA, 200, 0);
            var blindness = new PotionEffect(PotionEffectType.BLINDNESS, 200, 0);
            player.addPotionEffect(poison);
            player.addPotionEffect(confusion);
            player.addPotionEffect(blindness);
            player.sendMessage("\u00a7d樱风拂过林间\u00a7f，\u00a7c你惹恼了野外蜂灵，被狠狠的刺了一下");
        }
    } catch (e) {
        console.log("捕蜂网错误: " + e);
    }
}
