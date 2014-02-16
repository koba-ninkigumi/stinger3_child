<div id="side">
<div class="twibox">
<ul><li><h4 class="menu_underh2">Family 1st 主催</h4>
<div class="textwidget"><table><tbody><tr><td style="border-style: none; padding:0; margin:0;">
<img src="https://lh3.googleusercontent.com/-hUt4Qu_Nquc/TXlZqm5eI3I/AAAAAAAAP1k/wp0lweydigk/s320-no/koba2010-111.png" alt="小林照幸" width="150">
<br><a href="https://plus.google.com/102392287685374444674" rel="author">小林照幸</a></td><td style="border-style: none; padding:0; margin:0;">
<img src="https://lh6.googleusercontent.com/-xJCbMeo8pYI/UbGBCuLxNbI/AAAAAAAAIZM/jqfG5Acv4HE/s562-no/%25E5%2590%258D%25E7%25A7%25B0%25E6%259C%25AA%25E8%25A8%25AD%25E5%25AE%259A+%25E3%2581%25AE%25E3%2582%25B3%25E3%2583%2592%25E3%2582%259A%25E3%2583%25BC.jpg" alt="小林陽子" width="150">
<br><a href="https://plus.google.com/101043906851310987613" rel="author">小林陽子</a>
</td></tr>
</tbody></table>
<h4>理想の家族形成を支援する Family 1st</h4>
独身時代の小林夫妻が「世の中に溢れているのは付け焼き刃のような婚活サービスばかり。私たちが本当に求めているのはじっくりと腰を据えた筋金入りの理想の家族形成なのに」と抱えていた不満。
円満な家庭を形成してからも子供たちには同じ轍を踏ませたくないとの思いから、かつての自分たちが欲しかったサービスを自分たちの手で展開することを決意。
理想の家族形成に邁進するライフスタイルを提唱し、理想の家族形成を支援する Family 1st を始動する。</div>
</li></ul>
</div>
  <div class="sidead">
<?php if(is_mobile()) { ?>
<?php } else { ?>
<?php get_template_part('ad');?>
<?php } ?>
  </div>
  <?php get_search_form(); ?>
  <div class="kizi02"> 
    <!--最近のエントリ-->
    <h4 class="menu_underh2">NEW ENTRY</h4>
    <div id="topnews">
      <div>
<?php
$args = array(
    'posts_per_page' => 5,
);
$st_query = new WP_Query($args);
?>

<?php if( $st_query->have_posts() ): ?>
    <?php while ($st_query->have_posts()) : $st_query->the_post(); ?>
<dl><dt><span><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
        <?php if ( has_post_thumbnail() ): // サムネイルを持っているときの処理 ?>
    <?php the_post_thumbnail( 'thumb100' ); ?>
<?php else: // サムネイルを持っていないときの処理 ?>
    <img src="<?php if (defined('THEMECDN')) { echo THEMECDN; } else { echo get_template_directory_uri(); } ?><?php if (defined('NOIMAGE')) { echo NOIMAGE; } else { echo '/images/no-img.png'; } ?>" alt="no image" title="no image" width="100%" height="100%" />
        <?php endif; ?>
        </a></span></dt><dd><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>

<p><?php echo mb_substr( strip_tags( stinger_noshotcode( $post->post_content ) ), 0, 35 ) . ''; ?></p>
</dd>
<p class="clear"></p>
</dl>
    <?php endwhile; ?>
<?php else: ?>
    <p>記事はありませんでした</p>
<?php endif; ?>
<?php wp_reset_postdata(); ?>
        <p class="motto"> <a href="<?php echo home_url(); ?>/">→もっと見る</a></p>
      </div>
    </div>
    <!--/最近のエントリ-->

    <div id="twibox">
      <?php if ( function_exists('dynamic_sidebar') && dynamic_sidebar(1) ) : else : ?>
      <?php endif; ?>
    </div>
  </div>
  <!--/kizi--> 
  <!--アドセンス-->
  <div id="ad1">
    <div style="text-align:center;">
      <?php get_template_part('scroll-ad');?>
    </div>
  </div>
</div>
<!-- /#side -->