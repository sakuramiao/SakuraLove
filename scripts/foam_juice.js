/**
 * 沫泡果汁 - 食用后获得生命再生
 * 效果: REGENERATION 1 (30秒 = 600 ticks)
 */
function onConsume(event) {
    var player = event.getPlayer();
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.REGENERATION,
            600,   // 30秒
            0      // 等级1 (amplifier 0)
        )
    );
}
