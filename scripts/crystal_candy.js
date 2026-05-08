/**
 * 粉晶糖果 - 食用后获得急迫效果
 * 效果: HASTE 1 (30秒 = 600 ticks)
 */
function onConsume(event) {
    var player = event.getPlayer();
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.HASTE,
            600,   // 30秒
            0      // 等级1 (amplifier 0)
        )
    );
}
