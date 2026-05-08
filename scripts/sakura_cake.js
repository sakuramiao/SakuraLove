/**
 * 樱花蛋糕 - 食用后获得速度提升
 * 效果: SPEED 1 (60秒 = 1200 ticks)
 */
function onConsume(event) {
    var player = event.getPlayer();
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.SPEED,
            1200,  // 60秒
            0      // 等级1 (amplifier 0)
        )
    );
}
