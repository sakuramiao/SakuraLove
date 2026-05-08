/**
 * 星沫甘露 - 食用后获得夜视和跳跃提升
 * 效果: NIGHT_VISION (60秒) + JUMP_BOOST 1 (60秒)
 */
function onConsume(event) {
    var player = event.getPlayer();
    // 夜视效果 60秒
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.NIGHT_VISION,
            1200,  // 60秒
            0      // 等级1 (amplifier 0)
        )
    );
    // 跳跃提升 60秒
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.JUMP_BOOST,
            1200,  // 60秒
            0      // 等级1 (amplifier 0)
        )
    );
}
