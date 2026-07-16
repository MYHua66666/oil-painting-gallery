(function () {
  const gallery = document.getElementById('gallery');
  const emptyState = document.getElementById('empty-state');
  const filterArtist = document.getElementById('filter-artist');
  const filterColor = document.getElementById('filter-color');
  const filterStyle = document.getElementById('filter-style');
  const btnReset = document.getElementById('btn-reset');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  const paintings = [
    // === 文森特·梵高 (Vincent van Gogh) - 后印象派 ===
    {"id":1,"title":"Wheat Field with Cypresses","titleCn":"柏树与麦田","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1889,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高在圣雷米疗养院期间创作的杰作之一。金黄的麦田在风中翻涌，深绿色的柏树如火焰般直冲天际，卷曲的云朵与远处的群山形成动态构图，展现了画家内心涌动的生命力。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436535","image":"images/wheat-field-cypresses.jpg"},
    {"id":2,"title":"Sunflowers","titleCn":"向日葵","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1887,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高创作的向日葵系列之一。四朵凋谢的向日葵平放于桌面，厚重的笔触和鲜明的色彩对比展现了生命从盛放到衰败的自然循环。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436524","image":"images/sunflowers.jpg"},
    {"id":3,"title":"Irises","titleCn":"鸢尾花","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1890,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"cold","colorToneCn":"冷色调","description":"梵高生命最后一年的作品。紫蓝色的鸢尾花在瓶中优雅绽放，背景的明黄色与花朵的深紫形成强烈补色对比。笔触自由奔放，每片花瓣都仿佛在跃动。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436528","image":"images/irises.jpg"},
    {"id":4,"title":"Cypresses","titleCn":"柏树","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1889,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"cold","colorToneCn":"冷色调","description":"梵高对柏树着迷不已，认为它们的线条如同埃及方尖碑般优美。画中深绿的柏树像翻涌的火焰般直刺苍穹，与卷曲流动的天空和远处起伏的群山形成呼应，展现出大自然蕴含的巨大能量。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437980","image":"images/cypresses.jpg"},
    {"id":5,"title":"Shoes","titleCn":"鞋","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1888,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"dark","colorToneCn":"明暗对比","description":"梵高以极其朴素的主题——一双破旧的鞋——传达了劳动者的辛酸与尊严。厚重的笔触和沉郁的色调赋予这双鞋以生命，哲学家海德格尔曾以此画阐述艺术揭示真理的力量。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436533","image":"images/shoes-vangogh.jpg"},
    {"id":6,"title":"Self-Portrait with a Straw Hat","titleCn":"戴草帽的自画像","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1887,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高巴黎时期的自画像代表作。受印象派和点彩派影响，笔触短促而有方向性，浅色草帽与蓝绿色背景形成对比，展现了画家在巴黎艺术圈中的风格蜕变。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436532","image":"images/self-portrait-straw-hat.jpg"},
    {"id":7,"title":"Oleanders","titleCn":"夹竹桃","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1888,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"在阿尔勒阳光灿烂的日子里创作。粉红色的夹竹桃花瓣在绿叶的映衬下明亮夺目，旁边放着一本黄色封面的小说，整幅画散发着南法夏日的热情与生命力。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436530","image":"images/oleanders.jpg"},
    {"id":8,"title":"The Flowering Orchard","titleCn":"花开的果园","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1888,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"soft","colorToneCn":"柔和光影","description":"梵高抵达阿尔勒时正值春天，果树花开满园。他被这番景象深深打动，以明快清新的色彩描绘了白色花瓣在蓝天下绽放的春日田园。笔触轻快活泼，传达出对新生活的喜悦。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436527","image":"images/flowering-orchard.jpg"},
    {"id":9,"title":"First Steps, after Millet","titleCn":"初步（仿米勒）","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1890,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高在疗养院中根据米勒的版画再创作。一位农夫蹲下身子张开双臂，迎接蹒跚学步的幼儿，母亲在旁搀扶。梵高以独特的色彩和笔触将原本的黑白版画转化为充满温情的田园赞歌。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436526","image":"images/first-steps.jpg"},
    {"id":10,"title":"Roses","titleCn":"玫瑰","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1890,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"soft","colorToneCn":"柔和光影","description":"梵高离开圣雷米前夕创作的花卉杰作。白色与粉红色的玫瑰在翠绿色背景中盛放，每朵花都以旋转的笔触精心塑造，展现了画家即使在精神困扰中仍能捕捉自然之美的非凡能力。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436534","image":"images/roses-vangogh.jpg"},
    {"id":11,"title":"L'Arlésienne: Madame Ginoux","titleCn":"阿尔勒的女人：吉努夫人","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1889,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高根据高更所画的素描重新创作的肖像。吉努夫人身着阿尔勒传统服饰，倚靠在堆满书籍的桌旁，神情深邃而忧郁。明亮的黄色背景与暗色衣裙形成鲜明对比。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436529","image":"images/arlesienne.jpg"},
    {"id":12,"title":"Women Picking Olives","titleCn":"摘橄榄的妇女","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1889,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"cold","colorToneCn":"冷色调","description":"梵高在圣雷米创作的普罗旺斯田园风光。橄榄树扭曲的枝干在蓝紫色的天空下舒展，妇女们在树下劳作。蓝、绿、紫的冷色调与橙黄的暖色点缀形成微妙的色彩交响。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436536","image":"images/women-picking-olives.jpg"},
    {"id":13,"title":"Bouquet of Flowers in a Vase","titleCn":"花瓶中的花束","artist":"Vincent van Gogh","artistCn":"文森特·梵高","year":1890,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"梵高在奥维尔最后时期的花卉静物。各色鲜花在花瓶中热烈绽放，色彩大胆而和谐，奔放的笔触为整幅画注入了蓬勃的生命力，是画家最后绘画激情的明证。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436525","image":"images/bouquet-vangogh.jpg"},
    // === 伦勃朗 (Rembrandt) - 巴洛克 ===
    {"id":14,"title":"Self-Portrait","titleCn":"自画像","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1660,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"伦勃朗晚年最深刻的自画像之一。画家以坦诚的目光直视观者，面部的光影处理展现了岁月的痕迹与内心的沉思。暗色背景衬托出人物的存在感，是西方肖像画的巅峰之作。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437397","image":"images/self-portrait-rembrandt.jpg"},
    {"id":15,"title":"Aristotle with a Bust of Homer","titleCn":"亚里士多德凝视荷马半身像","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1653,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"伦勃朗为西西里贵族创作的历史题材巨作。亚里士多德身着华贵长袍，一手抚摸盲诗人荷马的半身像，神情中流露出对知识与智慧的深沉思索。明暗法的运用令人物从黑暗中浮现，庄严而神秘。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437394","image":"images/aristotle-homer.jpg"},
    {"id":16,"title":"Flora","titleCn":"花神芙洛拉","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1654,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"伦勃朗以妻子为模特创作的神话人物肖像。花神身着华丽的织锦长裙，手持鲜花，柔和的光线从侧面照亮她温润的面庞。画面色彩温暖细腻，是伦勃朗最具诗意的作品之一。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437398","image":"images/flora-rembrandt.jpg"},
    {"id":17,"title":"Hendrickje Stoffels","titleCn":"亨德里克耶·斯托芬","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1655,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"伦勃朗为晚年伴侣亨德里克耶所作的肖像。深情的目光与柔和的光影处理表达了画家对爱人的深厚感情。暗色背景中人物面容的微妙光泽，展示了伦勃朗肖像画的至高境界。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437396","image":"images/hendrickje-stoffels.jpg"},
    {"id":18,"title":"The Toilet of Bathsheba","titleCn":"拔示巴的梳洗","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1643,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"取材自旧约圣经故事。拔示巴在仆人的侍奉下梳洗，温暖的光线照亮她的肌肤，暗处的细节若隐若现。伦勃朗将圣经题材赋予了人性化的诠释，展现出女性的尊严与脆弱。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437393","image":"images/bathsheba.jpg"},
    {"id":19,"title":"Man in a Turban","titleCn":"戴头巾的男人","artist":"Rembrandt van Rijn","artistCn":"伦勃朗","year":1632,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"伦勃朗早期的异域人物研究。模特头戴东方风格的巨大头巾，面容被精准的光线所雕刻。这类\"特罗尼\"（面部研究）展示了年轻伦勃朗对光影和异国风情的浓厚兴趣。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437385","image":"images/man-in-turban.jpg"},
    // === 约翰内斯·维米尔 (Johannes Vermeer) - 巴洛克 ===
    {"id":20,"title":"A Maid Asleep","titleCn":"入睡的女仆","artist":"Johannes Vermeer","artistCn":"约翰内斯·维米尔","year":1657,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"维米尔早期的室内场景杰作。一位女仆倚靠桌旁沉入梦乡，桌上散落着水果与酒壶。柔和的光线从画面左侧洒入，营造出宁静而私密的日常氛围。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437878","image":"images/maid-asleep.jpg"},
    {"id":21,"title":"Study of a Young Woman","titleCn":"年轻女子的研究","artist":"Johannes Vermeer","artistCn":"约翰内斯·维米尔","year":1667,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"维米尔少数以深色背景衬托人物的作品。年轻女子微微侧转身子回望观者，柔软的光线照亮她的面庞和白色衣领。这幅画常被与《戴珍珠耳环的少女》相提并论。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437879","image":"images/young-woman-vermeer.jpg"},
    {"id":22,"title":"Young Woman with a Lute","titleCn":"弹琉特琴的年轻女子","artist":"Johannes Vermeer","artistCn":"约翰内斯·维米尔","year":1663,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"维米尔经典的室内音乐场景。一位年轻女子坐在窗前调试琉特琴，温柔的光线从左侧窗户洒入，墙上挂着一幅地图。宁静的氛围中弥漫着对远方的期盼。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437880","image":"images/woman-lute-vermeer.jpg"},
    {"id":23,"title":"Young Woman with a Water Pitcher","titleCn":"拿水壶的年轻女子","artist":"Johannes Vermeer","artistCn":"约翰内斯·维米尔","year":1662,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"维米尔最纯粹优雅的作品之一。年轻女子站在窗前，一手扶窗一手持水壶，蓝白色的头巾与衣裙在晨光中泛出柔和的光泽。画面构图极其平衡，如同一首凝固的视觉诗篇。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437881","image":"images/woman-water-pitcher.jpg"},
    {"id":24,"title":"Allegory of the Catholic Faith","titleCn":"天主教信仰的寓言","artist":"Johannes Vermeer","artistCn":"约翰内斯·维米尔","year":1672,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"维米尔少有的寓言题材作品。一位女性形象代表天主教信仰，脚踏地球，手按胸口，周围环绕着象征性的物件。维米尔将抽象的宗教概念融入其典型的室内光影之中。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437877","image":"images/allegory-faith.jpg"},
    // === 埃尔·格列柯 (El Greco) - 风格主义 ===
    {"id":25,"title":"View of Toledo","titleCn":"托莱多风景","artist":"El Greco","artistCn":"埃尔·格列柯","year":1600,"style":"Mannerism","styleCn":"风格主义","colorTone":"cold","colorToneCn":"冷色调","description":"西方风景画史上最杰出的作品之一。格列柯笔下的托莱多城在风暴将至的天空下呈现出超自然的壮丽，翻涌的绿灰色云层与城市的轮廓交织，宛如一场关于人间与天堂的戏剧性对话。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436575","image":"images/view-of-toledo.jpg"},
    {"id":26,"title":"The Vision of Saint John","titleCn":"圣约翰的异象","artist":"El Greco","artistCn":"埃尔·格列柯","year":1610,"style":"Mannerism","styleCn":"风格主义","colorTone":"dark","colorToneCn":"明暗对比","description":"格列柯晚期最具表现力的宗教画。拉长变形的人体在超自然的光芒中翻腾，圣约翰仰望天启的景象。这种极端的形式变形被视为表现主义的先声，毕加索从中获得了灵感。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436576","image":"images/vision-saint-john.jpg"},
    {"id":27,"title":"Cardinal Fernando Niño de Guevara","titleCn":"红衣主教格瓦拉","artist":"El Greco","artistCn":"埃尔·格列柯","year":1600,"style":"Mannerism","styleCn":"风格主义","colorTone":"warm","colorToneCn":"暖色调","description":"格列柯最著名的肖像画之一。红衣主教身着猩红长袍端坐于椅中，锐利的目光透过金丝眼镜直视前方。红色与金色的华丽色彩与人物严峻的神情形成微妙的心理张力。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436573","image":"images/cardinal-guevara.jpg"},
    // === 乔治·修拉 (Georges Seurat) - 点彩派 ===
    {"id":28,"title":"Circus Sideshow (Parade de cirque)","titleCn":"马戏团巡演","artist":"Georges Seurat","artistCn":"乔治·修拉","year":1888,"style":"Pointillism","styleCn":"点彩派","colorTone":"dark","colorToneCn":"明暗对比","description":"修拉运用点彩技法描绘夜晚马戏团入口的场景。煤气灯在黑暗中投射出温暖的光晕，乐手与观众在规律的色点中呈现出庄严而神秘的氛围。这是修拉第一幅描绘人工光源下夜景的作品。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437654","image":"images/circus-sideshow.jpg"},
    // === 保罗·高更 (Paul Gauguin) - 后印象派 ===
    {"id":29,"title":"Ia Orana Maria (Hail Mary)","titleCn":"圣母玛利亚","artist":"Paul Gauguin","artistCn":"保罗·高更","year":1891,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"高更抵达塔希提岛后的第一幅重要作品。他将基督教圣母题材融入南太平洋的热带风光中，波利尼西亚女性化身为圣母与天使，鲜艳的色彩与异域植物营造出一个原始而神圣的乐园。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/438821","image":"images/ia-orana-maria.jpg"},
    // === 雅克-路易·大卫 (Jacques-Louis David) - 新古典主义 ===
    {"id":30,"title":"The Death of Socrates","titleCn":"苏格拉底之死","artist":"Jacques-Louis David","artistCn":"雅克-路易·大卫","year":1787,"style":"Neoclassicism","styleCn":"新古典主义","colorTone":"soft","colorToneCn":"柔和光影","description":"新古典主义的典范之作。苏格拉底坦然地伸手接过毒芹酒杯，周围的弟子们悲痛欲绝。严谨的构图、雕塑般的人体和克制的色彩，传达出哲学家面对死亡时的理性与尊严。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436105","image":"images/death-of-socrates.jpg"},
    {"id":31,"title":"Antoine Laurent Lavoisier and His Wife","titleCn":"拉瓦锡与夫人","artist":"Jacques-Louis David","artistCn":"雅克-路易·大卫","year":1788,"style":"Neoclassicism","styleCn":"新古典主义","colorTone":"soft","colorToneCn":"柔和光影","description":"大卫为著名化学家拉瓦锡及其夫人所作的双人肖像。拉瓦锡坐在实验器材旁，夫人优雅地倚靠在他身边。画面既展现了启蒙时代的科学精神，又洋溢着夫妻间的深情。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436106","image":"images/lavoisier-david.jpg"},
    // === 保罗·塞尚 (Paul Cézanne) - 后印象派 ===
    {"id":32,"title":"The Card Players","titleCn":"玩牌者","artist":"Paul Cézanne","artistCn":"保罗·塞尚","year":1891,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"塞尚最著名的系列作品之一。两位普罗旺斯农民面对面专注地玩牌，画面结构严谨对称，色调温暖沉稳。塞尚用几何化的造型和坚实的笔触，将日常场景提升为具有纪念碑感的永恒画面。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435868","image":"images/card-players.jpg"},
    {"id":33,"title":"Still Life with Apples and a Pot of Primroses","titleCn":"苹果与报春花静物","artist":"Paul Cézanne","artistCn":"保罗·塞尚","year":1890,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"塞尚静物画的杰出代表。红苹果、白桌布与花盆在精心安排的构图中相互呼应，色彩关系微妙而坚实。塞尚通过对形体和空间的重新诠释，为现代绘画开辟了道路。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435882","image":"images/apples-primroses.jpg"},
    // === 欧仁·德拉克罗瓦 (Eugène Delacroix) - 浪漫主义 ===
    {"id":34,"title":"The Abduction of Rebecca","titleCn":"劫持丽贝卡","artist":"Eugène Delacroix","artistCn":"欧仁·德拉克罗瓦","year":1846,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"warm","colorToneCn":"暖色调","description":"取材自司各特小说《艾凡赫》的戏剧性场景。身着白衣的丽贝卡被骑士从燃烧的城堡中劫走，画面充满运动感与热烈色彩。德拉克罗瓦以奔放的笔触和强烈的情感表达了浪漫主义的核心精神。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/438814","image":"images/abduction-rebecca.jpg"},
    // === 爱德华·马奈 (Édouard Manet) - 印象派 ===
    {"id":35,"title":"Boating","titleCn":"划船","artist":"Édouard Manet","artistCn":"爱德华·马奈","year":1874,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"马奈在阿让特伊与莫奈共同创作时期的代表作。画面以大胆的俯视角度呈现，蔚蓝色的水面占据大部分画幅，白衣男子与女乘客的形象简洁有力。平面化的构图和明快的色彩预示了现代绘画的方向。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436947","image":"images/boating.jpg"},
    {"id":36,"title":"The Spanish Singer","titleCn":"西班牙歌手","artist":"Édouard Manet","artistCn":"爱德华·马奈","year":1860,"style":"Realism","styleCn":"现实主义","colorTone":"dark","colorToneCn":"明暗对比","description":"马奈早期令人瞩目的杰作，在1861年沙龙中获得好评。一位西班牙吉他手坐在简陋的长凳上自弹自唱，灵活的笔触和大胆的明暗对比让当时的评论家们眼前一亮。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436944","image":"images/spanish-singer.jpg"},
    {"id":37,"title":"Boy with a Sword","titleCn":"持剑少年","artist":"Édouard Manet","artistCn":"爱德华·马奈","year":1861,"style":"Realism","styleCn":"现实主义","colorTone":"dark","colorToneCn":"明暗对比","description":"马奈以自己的儿子莱昂为模特，模仿西班牙黄金时代绘画风格创作的肖像。少年身着黑色衣裤，双手握着一把过大的古剑，天真的面容与严肃的道具形成有趣的反差。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436948","image":"images/boy-sword-manet.jpg"},
    // === 提香 (Titian) - 文艺复兴 ===
    {"id":38,"title":"Venus and Adonis","titleCn":"维纳斯与阿多尼斯","artist":"Titian","artistCn":"提香","year":1554,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"soft","colorToneCn":"柔和光影","description":"提香为西班牙国王菲利普二世创作的神话题材名作。维纳斯竭力挽留即将出猎的阿多尼斯，肉体的温润光泽与风景的深沉色调形成对比。画面充满戏剧性张力，是威尼斯画派色彩运用的巅峰。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437826","image":"images/venus-adonis.jpg"},
    // === 卡拉瓦乔 (Caravaggio) - 巴洛克 ===
    {"id":39,"title":"The Musicians","titleCn":"音乐家们","artist":"Caravaggio","artistCn":"卡拉瓦乔","year":1597,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"卡拉瓦乔早期的多人物杰作。四位年轻乐手聚在一起，准备演奏或调弦，其中一位正回头凝视观者。画家以精湛的明暗法和细腻的人物刻画，将古典音乐的优雅与青春的感性完美融合。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435844","image":"images/musicians.jpg"},
    // === 奥古斯特·雷诺阿 (Auguste Renoir) - 印象派 ===
    {"id":40,"title":"Madame Charpentier and Her Children","titleCn":"夏庞蒂埃夫人和她的孩子们","artist":"Auguste Renoir","artistCn":"奥古斯特·雷诺阿","year":1878,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"雷诺阿最成功的沙龙作品。出版商夫人与两个孩子在华丽的客厅中，大型纽芬兰犬温顺地卧在脚边。温暖的色调和流畅的笔触捕捉了巴黎上流社会的优雅与亲情。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/438815","image":"images/charpentier-renoir.jpg"},
    {"id":41,"title":"By the Seashore","titleCn":"海边","artist":"Auguste Renoir","artistCn":"奥古斯特·雷诺阿","year":1883,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"雷诺阿在诺曼底海滨创作的人物画。一位优雅的年轻女子坐在柳条椅上，身后是蓝灰色的海景。画面结合了印象派的光线处理与古典肖像的构图，是雷诺阿\"严肃时期\"的代表。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437430","image":"images/by-the-seashore.jpg"},
    {"id":42,"title":"In the Meadow","titleCn":"草地上","artist":"Auguste Renoir","artistCn":"奥古斯特·雷诺阿","year":1890,"style":"Impressionism","styleCn":"印象派","colorTone":"soft","colorToneCn":"柔和光影","description":"两个女孩在阳光明媚的草地上摘野花。斑驳的光影洒在人物和草地上，色彩明亮而柔和。雷诺阿以流动的笔触捕捉了乡村午后慵懒而美好的瞬间。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437434","image":"images/in-the-meadow.jpg"},
    {"id":43,"title":"Reclining Nude","titleCn":"斜倚的裸女","artist":"Auguste Renoir","artistCn":"奥古斯特·雷诺阿","year":1883,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"雷诺阿对女性人体美的典型诠释。模特侧卧在白色织物上，肌肤泛着珍珠般的柔润光泽。温暖的肉色与冷调背景形成微妙对比，笔触圆润流畅如同抚摸轮廓。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/438013","image":"images/reclining-nude-renoir.jpg"},
    // === 埃德加·德加 (Edgar Degas) - 印象派 ===
    {"id":44,"title":"The Rehearsal of the Ballet Onstage","titleCn":"舞台上的芭蕾排练","artist":"Edgar Degas","artistCn":"埃德加·德加","year":1874,"style":"Impressionism","styleCn":"印象派","colorTone":"soft","colorToneCn":"柔和光影","description":"德加以独特的视角捕捉芭蕾排练的瞬间。舞者们在舞台上练习，有的伸展身体，有的在休息。大胆的斜角构图和对人工光线的精妙处理，让观者仿佛置身于巴黎歌剧院的侧幕之中。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436155","image":"images/rehearsal-ballet.jpg"},
    {"id":45,"title":"A Woman Ironing","titleCn":"熨衣服的女人","artist":"Edgar Degas","artistCn":"埃德加·德加","year":1873,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"德加对巴黎劳动阶层生活的真实描绘。一位洗衣女工弯腰用力熨烫衣物，简洁有力的构图和抑制的色彩传达出劳动的沉重。德加以冷静的观察揭示了现代都市生活中不为人知的一面。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436174","image":"images/woman-ironing.jpg"},
    {"id":46,"title":"Sulking","titleCn":"赌气","artist":"Edgar Degas","artistCn":"埃德加·德加","year":1870,"style":"Impressionism","styleCn":"印象派","colorTone":"dark","colorToneCn":"明暗对比","description":"德加的心理学题材画作。一男一女在办公室中背对着坐，空气中弥漫着沉默的紧张气氛。德加像一位文学家般捕捉人际关系中微妙的心理戏剧，构图和色彩服务于情绪的表达。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436162","image":"images/sulking-degas.jpg"},
    {"id":47,"title":"The Singer in Green","titleCn":"穿绿衣的歌手","artist":"Edgar Degas","artistCn":"埃德加·德加","year":1884,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"咖啡音乐会中的一幕。穿绿色衣裙的歌手在舞台灯光下张嘴歌唱，手势夸张而生动。德加以粉彩捕捉了人工照明下的色彩效果，将日常娱乐场景提升为令人难忘的艺术瞬间。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436159","image":"images/singer-in-green.jpg"},
    // === 彼得·保罗·鲁本斯 (Peter Paul Rubens) - 巴洛克 ===
    {"id":48,"title":"The Triumph of Henry IV","titleCn":"亨利四世的凯旋","artist":"Peter Paul Rubens","artistCn":"彼得·保罗·鲁本斯","year":1630,"style":"Baroque","styleCn":"巴洛克","colorTone":"warm","colorToneCn":"暖色调","description":"鲁本斯为法国王室创作的宏大历史画草图。亨利四世骑着战马凯旋而归，天使和寓言人物簇拥在侧。画面充满鲁本斯标志性的动态张力、丰腴人体和辉煌色彩。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437534","image":"images/triumph-henry-rubens.jpg"},
    {"id":49,"title":"A Forest at Dawn with a Deer Hunt","titleCn":"黎明森林中的猎鹿","artist":"Peter Paul Rubens","artistCn":"彼得·保罗·鲁本斯","year":1635,"style":"Baroque","styleCn":"巴洛克","colorTone":"cold","colorToneCn":"冷色调","description":"鲁本斯晚年的风景画杰作。晨光透过密林照亮了猎鹿的紧张场面，树木的深绿色调与远处天空的金色形成壮丽的层次感。自然的力量与人类活动在画面中达到戏剧性的平衡。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437526","image":"images/forest-dawn-rubens.jpg"},
    {"id":50,"title":"Wolf and Fox Hunt","titleCn":"猎狼与狐","artist":"Peter Paul Rubens","artistCn":"彼得·保罗·鲁本斯","year":1616,"style":"Baroque","styleCn":"巴洛克","colorTone":"warm","colorToneCn":"暖色调","description":"鲁本斯狩猎主题的经典之作。骑手、猎犬与野兽在激烈的搏斗中扭打成团，画面充满爆发性的运动和力量。鲁本斯以超凡的构图能力驾驭了如此复杂的多人物动态场景。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437536","image":"images/wolf-fox-hunt.jpg"},
    {"id":51,"title":"Venus and Adonis","titleCn":"维纳斯与阿多尼斯","artist":"Peter Paul Rubens","artistCn":"彼得·保罗·鲁本斯","year":1635,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"鲁本斯诠释的经典神话：维纳斯试图阻止年轻的阿多尼斯前去狩猎。女神丰腴的肉体在柔光中闪耀，小爱神们在一旁哭泣。鲁本斯以奔放的笔触表达了爱与死的永恒主题。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437535","image":"images/venus-adonis-rubens.jpg"},
    // === 迭戈·委拉斯开兹 (Diego Velázquez) - 巴洛克 ===
    {"id":52,"title":"Juan de Pareja","titleCn":"胡安·德·帕雷哈","artist":"Diego Velázquez","artistCn":"迭戈·委拉斯开兹","year":1650,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"委拉斯开兹在罗马为助手胡安·德·帕雷哈所作的肖像，据传为他创作教皇肖像前的\"热身之作\"。帕雷哈的形象充满尊严与自信，笔触精妙自然，曾在展出时令罗马画坛为之惊叹。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437869","image":"images/juan-de-pareja.jpg"},
    {"id":53,"title":"The Supper at Emmaus","titleCn":"以马忤斯的晚餐","artist":"Diego Velázquez","artistCn":"迭戈·委拉斯开兹","year":1623,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"委拉斯开兹早期受卡拉瓦乔影响的作品。复活的基督与两位门徒同桌用餐的场景在强烈的明暗对比中展开，严谨的写实风格和深沉的色调显示了年轻画家的早熟才华。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437871","image":"images/supper-emmaus-velazquez.jpg"},
    {"id":54,"title":"María Teresa, Infanta of Spain","titleCn":"西班牙公主玛丽亚·特蕾莎","artist":"Diego Velázquez","artistCn":"迭戈·委拉斯开兹","year":1653,"style":"Baroque","styleCn":"巴洛克","colorTone":"soft","colorToneCn":"柔和光影","description":"委拉斯开兹为年轻的西班牙公主所作的肖像。银灰色的华丽衣裙与粉嫩的面庞形成精致的色彩搭配，画家以极其细腻的笔触描绘了织物的光泽和发丝的质感，展现了宫廷肖像画的最高水准。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437870","image":"images/maria-teresa.jpg"},
    // === 约瑟夫·马洛德·威廉·透纳 (J.M.W. Turner) - 浪漫主义 ===
    {"id":55,"title":"Venice, from the Porch of Madonna della Salute","titleCn":"从圣母安康教堂门廊望威尼斯","artist":"J.M.W. Turner","artistCn":"约瑟夫·透纳","year":1835,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"warm","colorToneCn":"暖色调","description":"透纳对威尼斯的深情诠释。金色的阳光透过教堂门廊洒向运河，水面波光粼粼，远处的建筑在雾气中若隐若现。透纳以其标志性的光与大气渲染，将威尼斯化为一座光的城市。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437853","image":"images/venice-turner.jpg"},
    {"id":56,"title":"Whalers","titleCn":"捕鲸者","artist":"J.M.W. Turner","artistCn":"约瑟夫·透纳","year":1845,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"cold","colorToneCn":"冷色调","description":"透纳晚期最具抽象性的海景画之一。捕鲸船在汹涌的海面上与巨鲸搏斗，人与自然的力量对比在模糊的色彩中展开。几乎消融的形体和大气化的光线预示了抽象表现主义的到来。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437854","image":"images/whalers-turner.jpg"},
    // === 拉斐尔 (Raphael) - 文艺复兴 ===
    {"id":57,"title":"Madonna and Child Enthroned with Saints","titleCn":"圣母子与圣徒","artist":"Raphael","artistCn":"拉斐尔","year":1504,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"soft","colorToneCn":"柔和光影","description":"拉斐尔早期的祭坛画杰作。圣母端坐宝座之上，圣婴在膝上安详地祝福信众，两侧圣徒庄严肃立。画面构图严谨对称，色彩柔和明亮，体现了文艺复兴盛期追求的完美和谐。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437372","image":"images/madonna-raphael.jpg"},
    {"id":58,"title":"Giuliano de' Medici, Duke of Nemours","titleCn":"朱利亚诺·德·美第奇","artist":"Raphael","artistCn":"拉斐尔","year":1515,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"dark","colorToneCn":"明暗对比","description":"拉斐尔为佛罗伦萨美第奇家族所作的肖像。年轻的公爵侧身而立，面容英俊而深邃，红色衣袍在暗色背景中显得格外醒目。拉斐尔以典雅的笔触捕捉了文艺复兴贵族的气质与风度。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437373","image":"images/giuliano-medici.jpg"},
    // === 古斯塔夫·库尔贝 (Gustave Courbet) - 现实主义 ===
    {"id":59,"title":"Woman with a Parrot","titleCn":"持鹦鹉的女人","artist":"Gustave Courbet","artistCn":"古斯塔夫·库尔贝","year":1866,"style":"Realism","styleCn":"现实主义","colorTone":"dark","colorToneCn":"明暗对比","description":"库尔贝充满感官魅力的人体画。裸女仰卧在白色织物上，一只彩色鹦鹉栖息在她举起的手上。丰富的肉体质感、蓬松的秀发和深色背景的对比，展现了库尔贝对现实的直接而有力的把握。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436002","image":"images/woman-parrot-courbet.jpg"},
    // === 皮埃尔-奥古斯特·科特 (Pierre-Auguste Cot) - 学院派 ===
    {"id":60,"title":"The Storm","titleCn":"暴风雨","artist":"Pierre-Auguste Cot","artistCn":"威廉-阿道夫·布格罗","year":1880,"style":"Academicism","styleCn":"学院派","colorTone":"soft","colorToneCn":"柔和光影","description":"学院派绘画中最浪漫动人的作品之一。一对年轻恋人在突如其来的暴风雨中奔跑，共同撑起一块薄纱遮挡风雨。画面构图动感十足，人体描绘精准而优美，在阴暗的天空衬托下如同一首青春的颂歌。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435997","image":"images/the-storm-cot.jpg"},
    {"id":61,"title":"Springtime","titleCn":"春天","artist":"Pierre-Auguste Cot","artistCn":"威廉-阿道夫·布格罗","year":1873,"style":"Academicism","styleCn":"学院派","colorTone":"soft","colorToneCn":"柔和光影","description":"学院派的田园浪漫典范。一对年轻恋人坐在花藤编成的秋千上，在春日的阳光中甜蜜相拥。理想化的人体、精致的花卉和柔和的光线营造出田园诗般的梦幻氛围。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/438158","image":"images/springtime-cot.jpg"},
    // === 欧仁·德拉克罗瓦 补充 ===
    {"id":62,"title":"Christ Asleep during the Tempest","titleCn":"暴风雨中沉睡的基督","artist":"Eugène Delacroix","artistCn":"欧仁·德拉克罗瓦","year":1853,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"cold","colorToneCn":"冷色调","description":"德拉克罗瓦取材新约圣经的小幅杰作。狂暴的风浪席卷渡船，门徒们惊恐万状，而基督却在船尾安然沉睡。浓烈的色彩与激烈的笔触渲染出自然力量的狂暴与信仰的宁静之间的对比。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436176","image":"images/christ-tempest-delacroix.jpg"},
    {"id":63,"title":"Basket of Flowers","titleCn":"花篮","artist":"Eugène Delacroix","artistCn":"欧仁·德拉克罗瓦","year":1849,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"warm","colorToneCn":"暖色调","description":"德拉克罗瓦鲜为人知的花卉静物画。各色鲜花在篮中热烈绽放，色彩浓烈奔放，笔触自由不拘。即使在静物题材中，德拉克罗瓦也注入了他标志性的激情与浪漫主义色彩理念。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436175","image":"images/basket-flowers-delacroix.jpg"},
    // === 提香 补充 ===
    {"id":64,"title":"Venus and the Lute Player","titleCn":"维纳斯与琉特琴手","artist":"Titian","artistCn":"提香","year":1567,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"warm","colorToneCn":"暖色调","description":"提香反复创作的经典主题。维纳斯斜倚榻上，年轻的琉特琴手一边演奏一边回望女神。画面将音乐与美的愉悦融为一体，丰富的肉体色彩和深远的风景展示了威尼斯画派对色与光的极致追求。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437827","image":"images/venus-lute-player.jpg"},
    {"id":65,"title":"Madonna and Child","titleCn":"圣母子","artist":"Titian","artistCn":"提香","year":1508,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"soft","colorToneCn":"柔和光影","description":"提香早期的宗教画杰作，受老师乔尔乔内的影响。圣母温柔地低头注视怀中的圣婴，柔和的光线和深沉的色调营造出亲密而神圣的氛围。是提香从乔尔乔内风格到独创风格转变的见证。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437824","image":"images/madonna-child-titian.jpg"},
    // === 卡拉瓦乔 补充 ===
    {"id":66,"title":"The Denial of Saint Peter","titleCn":"圣彼得的否认","artist":"Caravaggio","artistCn":"卡拉瓦乔","year":1610,"style":"Baroque","styleCn":"巴洛克","colorTone":"dark","colorToneCn":"明暗对比","description":"卡拉瓦乔生命最后一年的作品。圣彼得在烛光下被女仆指认，面容中交织着恐惧与羞愧。戏剧性的明暗对比将三个人物从漆黑的背景中推出，紧张的心理氛围令人窒息。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437986","image":"images/denial-peter-caravaggio.jpg"},
    {"id":67,"title":"The Fortune-Teller","titleCn":"算命者","artist":"Caravaggio (follower)","artistCn":"卡拉瓦乔","year":1633,"style":"Baroque","styleCn":"巴洛克","colorTone":"warm","colorToneCn":"暖色调","description":"卡拉瓦乔主义流派的经典之作。一位天真的年轻贵族正被吉普赛算命女郎分散注意力，而她的同伴们趁机偷窃他的钱包。强烈的现实主义手法和戏剧性的人物互动，继承了卡拉瓦乔对日常场景的大胆表现。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436838","image":"images/fortune-teller.jpg"},
    // === 乔治·修拉 补充 ===
    {"id":68,"title":"Study for 'A Sunday on La Grande Jatte'","titleCn":"《大碗岛星期天》习作","artist":"Georges Seurat","artistCn":"乔治·修拉","year":1884,"style":"Pointillism","styleCn":"点彩派","colorTone":"soft","colorToneCn":"柔和光影","description":"修拉为其最著名作品所作的油画习作。虽然尺幅较小，但已展现出最终版本的基本构图：塞纳河畔的市民在阳光下休憩。色点尚未像完成作品那样精密，但充满探索的活力。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437658","image":"images/study-grande-jatte.jpg"},
    {"id":69,"title":"The Forest at Pontaubert","titleCn":"蓬托贝尔的森林","artist":"Georges Seurat","artistCn":"乔治·修拉","year":1881,"style":"Pointillism","styleCn":"点彩派","colorTone":"cold","colorToneCn":"冷色调","description":"修拉早期的风景作品，在发展出点彩技法之前创作。密林中的光影交错，绿色的层次丰富而微妙。虽然手法尚属传统，但对光线效果的关注已暗示了他后来革命性的色彩理论。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437655","image":"images/forest-pontaubert.jpg"},
    // === 保罗·高更 补充 ===
    {"id":70,"title":"Two Tahitian Women","titleCn":"两个塔希提女人","artist":"Paul Gauguin","artistCn":"保罗·高更","year":1899,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"高更塔希提时期最著名的人物画之一。两位波利尼西亚女性以庄重而自然的姿态呈现，一人手捧果盘，肤色温暖如铜。鲜明的色彩平涂和简洁的轮廓线展现了高更追求的\"原始\"之美。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436446","image":"images/two-tahitian-women.jpg"},
    {"id":71,"title":"The Siesta","titleCn":"午睡","artist":"Paul Gauguin","artistCn":"保罗·高更","year":1894,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"warm","colorToneCn":"暖色调","description":"高更描绘塔希提女性日常生活的场景。几位妇女在树荫下或坐或卧，在午后的炎热中休憩。画面色彩浓郁，蓝紫色裙摆与橙黄色地面形成强烈的装饰性对比，弥漫着南太平洋的慵懒气息。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436449","image":"images/siesta-gauguin.jpg"},
    // === 古斯塔夫·库尔贝 补充 ===
    {"id":72,"title":"The Woman in the Waves","titleCn":"浪中的女人","artist":"Gustave Courbet","artistCn":"古斯塔夫·库尔贝","year":1868,"style":"Realism","styleCn":"现实主义","colorTone":"cold","colorToneCn":"冷色调","description":"库尔贝将裸体画与海景画结合的大胆尝试。一位丰满的女子站在海浪中，双臂上举展露身体，浪花拍打着她的腰身。库尔贝以厚实的笔触和直率的表现手法挑战了学院派对裸体的理想化传统。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436004","image":"images/woman-waves-courbet.jpg"},
    {"id":73,"title":"The Calm Sea","titleCn":"平静的海","artist":"Gustave Courbet","artistCn":"古斯塔夫·库尔贝","year":1869,"style":"Realism","styleCn":"现实主义","colorTone":"cold","colorToneCn":"冷色调","description":"库尔贝最纯粹的海景画之一。宁静的海面在低矮的天空下延伸，几艘小船点缀其间。画家用调色刀层层叠加出海水的质感，捕捉了诺曼底海岸线那种宁静而永恒的力量。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436005","image":"images/calm-sea-courbet.jpg"},
    // === 保罗·塞尚 补充 ===
    {"id":74,"title":"Mont Sainte-Victoire and the Viaduct of the Arc River Valley","titleCn":"圣维克多山与弧形河谷高架桥","artist":"Paul Cézanne","artistCn":"保罗·塞尚","year":1884,"style":"Post-Impressionism","styleCn":"后印象派","colorTone":"cold","colorToneCn":"冷色调","description":"塞尚反复描绘的故乡圣维克多山系列之一。远山的蓝紫色轮廓在松树枝干的框架中呈现，近景的高架桥横贯画面。塞尚以几何化的笔触构建出坚实的空间结构，预示了立体主义的诞生。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435877","image":"images/mont-sainte-victoire.jpg"},
    // === 约瑟夫·透纳 补充 ===
    {"id":75,"title":"Saltash with the Water Ferry, Cornwall","titleCn":"康沃尔的萨尔塔什渡口","artist":"J.M.W. Turner","artistCn":"约瑟夫·透纳","year":1811,"style":"Romanticism","styleCn":"浪漫主义","colorTone":"soft","colorToneCn":"柔和光影","description":"透纳早期的英国风景画。河流在晨光中泛着银色的微光，渡船载着乘客缓缓穿越水面，远处的城镇在薄雾中若隐若现。平和的构图与细腻的光线处理展现了透纳对英国田园的深情。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437852","image":"images/saltash-turner.jpg"},
    // === 拉斐尔 补充 ===
    {"id":76,"title":"The Agony in the Garden","titleCn":"客西马尼园的祈祷","artist":"Raphael","artistCn":"拉斐尔","year":1504,"style":"Renaissance","styleCn":"文艺复兴","colorTone":"dark","colorToneCn":"明暗对比","description":"拉斐尔早期受佩鲁吉诺影响的宗教画。基督在夜色中跪地祈祷，三位门徒沉沉入睡。小幅画面中展现出对光影、空间和人物情感的精确把握，是拉斐尔天才早现的明证。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/437371","image":"images/agony-garden-raphael.jpg"},
    // === 雅克-路易·大卫 补充 ===
    {"id":77,"title":"General Étienne-Maurice Gérard","titleCn":"热拉尔将军","artist":"Jacques-Louis David","artistCn":"雅克-路易·大卫","year":1816,"style":"Neoclassicism","styleCn":"新古典主义","colorTone":"dark","colorToneCn":"明暗对比","description":"大卫流亡布鲁塞尔时期为拿破仑旧将所作的肖像。将军身着军礼服，神情坚毅而从容。大卫以精准的写实技法和严谨的构图，在晚年依然展现了新古典主义肖像画的最高水准。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/436107","image":"images/general-gerard-david.jpg"},
    // === 威廉-阿道夫·布格罗 (William-Adolphe Bouguereau) - 学院派 ===
    {"id":78,"title":"Young Mother Gazing at Her Child","titleCn":"凝视孩子的年轻母亲","artist":"William-Adolphe Bouguereau","artistCn":"威廉-阿道夫·布格罗","year":1871,"style":"Academicism","styleCn":"学院派","colorTone":"soft","colorToneCn":"柔和光影","description":"布格罗最动人的母子题材之一。年轻的母亲温柔地凝视怀中的婴儿，肌肤的质感如瓷器般细腻，柔和的光线笼罩着这个神圣的瞬间。布格罗以超凡的技巧将日常的母爱提升为永恒的美。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435752","image":"images/young-mother-bouguereau.jpg"},
    {"id":79,"title":"Breton Brother and Sister","titleCn":"布列塔尼兄妹","artist":"William-Adolphe Bouguereau","artistCn":"威廉-阿道夫·布格罗","year":1871,"style":"Academicism","styleCn":"学院派","colorTone":"dark","colorToneCn":"明暗对比","description":"布格罗描绘法国布列塔尼地区农村儿童的作品。哥哥背着年幼的妹妹，两人赤着脚站在简陋的背景前，天真的面容中流露出穷人家孩子早熟的坚韧。精湛的写实技法赋予了画面照片般的真实感。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435754","image":"images/breton-siblings.jpg"},
    {"id":80,"title":"The Proposal","titleCn":"求婚","artist":"William-Adolphe Bouguereau","artistCn":"威廉-阿道夫·布格罗","year":1872,"style":"Academicism","styleCn":"学院派","colorTone":"warm","colorToneCn":"暖色调","description":"布格罗的田园风情画。一对年轻的乡村恋人坐在古老的石阶上，男子正向羞涩的少女倾诉爱意。人物的肌肤描绘细腻如真，周围的自然环境增添了浪漫与诗意的氛围。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435753","image":"images/proposal-bouguereau.jpg"},
    // === 亚历山大·卡巴内尔 (Alexandre Cabanel) - 学院派 ===
    {"id":81,"title":"The Birth of Venus","titleCn":"维纳斯的诞生","artist":"Alexandre Cabanel","artistCn":"亚历山大·卡巴内尔","year":1875,"style":"Academicism","styleCn":"学院派","colorTone":"soft","colorToneCn":"柔和光影","description":"卡巴内尔最著名的作品，与波提切利的同名画并列为艺术史上最知名的维纳斯形象。女神横卧在海浪之上，丘比特们在空中飞翔。理想化的人体和柔美的色调使这幅画成为法国学院派的标杆之作。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435831","image":"images/birth-venus-cabanel.jpg"},
    {"id":82,"title":"Florentine Poet","titleCn":"佛罗伦萨诗人","artist":"Alexandre Cabanel","artistCn":"亚历山大·卡巴内尔","year":1861,"style":"Academicism","styleCn":"学院派","colorTone":"dark","colorToneCn":"明暗对比","description":"卡巴内尔的历史题材作品。一位年轻的佛罗伦萨诗人正在朗读自己的作品，周围的听众神态各异。画面构图严谨，人物刻画精致入微，展现了学院派对文学与艺术相融合的理想追求。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435832","image":"images/florentine-poet.jpg"},
    {"id":83,"title":"Echo","titleCn":"回声女神厄科","artist":"Alexandre Cabanel","artistCn":"亚历山大·卡巴内尔","year":1874,"style":"Academicism","styleCn":"学院派","colorTone":"soft","colorToneCn":"柔和光影","description":"取材自奥维德《变形记》中的希腊神话。水仙那耳喀索斯拒绝了厄科的爱情，她悲伤地隐入山林最终化为回声。卡巴内尔以柔美的笔触和诗意的光线，将这个悲伤的神话诠释为一曲无声的哀歌。","museum":"Metropolitan Museum of Art","city":"New York, USA","museumUrl":"https://www.metmuseum.org/art/collection/search/435829","image":"images/echo-cabanel.jpg"},
    // === 克劳德·莫奈 (Claude Monet) - 印象派 ===
    {"id":84,"title":"The Red Kerchief","titleCn":"红头巾","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1870,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"莫奈最私密的画作之一，终生不曾出售。第一任妻子卡米耶戴着红色头巾从阿让特伊住所的法式玻璃门外经过，白雪覆盖的花园作为背景。透过窗玻璃的模糊效果赋予画面梦幻般的诗意。","museum":"Cleveland Museum of Art","city":"Cleveland, USA","museumUrl":"https://www.clevelandart.org/art/1958.39","image":"images/monet-red-kerchief.jpg"},
    {"id":85,"title":"Water Lilies (Agapanthus)","titleCn":"睡莲（百子莲）","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1920,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"莫奈晚年巨幅睡莲系列之一。画面完全由水面、倒影和漂浮的睡莲构成，没有天际线和岸边参照物。紫蓝色的光影与翠绿的莲叶交织，创造出近乎抽象的冥想空间，影响了后来的抽象表现主义。","museum":"Cleveland Museum of Art","city":"Cleveland, USA","museumUrl":"https://www.clevelandart.org/art/1960.81","image":"images/monet-water-lilies-cma.jpg"},
    {"id":86,"title":"Gardener's House at Antibes","titleCn":"昂蒂布的园丁小屋","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1888,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"1888年莫奈前往法国南部昂蒂布写生期间的作品。地中海的强烈阳光照耀着小屋和花园，远处湛蓝的海面与阿尔卑斯雪山相映。明亮的色彩和轻快的笔触捕捉了南法独特的光线与氛围。","museum":"Cleveland Museum of Art","city":"Cleveland, USA","museumUrl":"https://www.clevelandart.org/art/1916.1044","image":"images/monet-gardener-antibes.jpg"},
    {"id":87,"title":"Low Tide at Pourville, near Dieppe","titleCn":"普维尔的退潮","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1882,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"莫奈在诺曼底海滨小镇普维尔创作的海景画。退潮后裸露的礁石和沙滩在阳光下呈现丰富的色彩变化，远处的悬崖在薄雾中隐约可见。细碎的笔触完美传达了海风中潮湿的空气感。","museum":"Cleveland Museum of Art","city":"Cleveland, USA","museumUrl":"https://www.clevelandart.org/art/1947.196","image":"images/monet-low-tide-pourville.jpg"},
    {"id":88,"title":"Spring Flowers","titleCn":"春花","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1864,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"莫奈早期的花卉静物画，创作于印象派运动正式兴起之前。各色春花在花瓶中绽放，色彩鲜艳而笔触尚属传统。这幅作品见证了年轻莫奈从学院派向外光写生过渡的关键时期。","museum":"Cleveland Museum of Art","city":"Cleveland, USA","museumUrl":"https://www.clevelandart.org/art/1953.155","image":"images/monet-spring-flowers.jpg"},
    {"id":89,"title":"Woman with a Parasol - Madame Monet and Her Son","titleCn":"撑阳伞的女人——莫奈夫人和她的儿子","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1875,"style":"Impressionism","styleCn":"印象派","colorTone":"soft","colorToneCn":"柔和光影","description":"印象派最具标志性的作品之一。卡米耶撑着阳伞站在山丘上，白裙在风中飘扬，小儿子让在草丛中仰望母亲。逆光中飘动的衣裙和流云营造出瞬间即逝的光影之美，是莫奈捕捉\"印象\"的极致体现。","museum":"National Gallery of Art","city":"Washington D.C., USA","museumUrl":"https://www.nga.gov/collection/art-object-page.61379.html","image":"images/monet-woman-parasol.jpg"},
    {"id":90,"title":"The Japanese Footbridge","titleCn":"日本桥","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1899,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"莫奈吉维尼花园中最著名的景致。绿色的日本风格拱桥横跨睡莲池塘，紫藤从桥上垂下，水面倒映着蓝天绿柳。精心构建的花园成为莫奈晚年取之不尽的创作源泉。","museum":"National Gallery of Art","city":"Washington D.C., USA","museumUrl":"https://www.nga.gov/collection/art-object-page.46240.html","image":"images/monet-nga-bridge.jpg"},
    {"id":91,"title":"Houses of Parliament, Sunset","titleCn":"国会大厦·日落","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1903,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"莫奈伦敦系列的代表作。泰晤士河畔的国会大厦在夕阳的金色光芒中化为朦胧的剪影，水面反射着天空的橙紫色光辉。大气中的雾霭将建筑轮廓溶解为色彩的交响。","museum":"National Gallery of Art","city":"Washington D.C., USA","museumUrl":"https://www.nga.gov/collection/art-object-page.46573.html","image":"images/monet-nga-houses-parl.jpg"},
    {"id":92,"title":"The Palazzo Ducale, Seen from San Giorgio Maggiore","titleCn":"从圣乔治马焦雷岛眺望总督宫","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1908,"style":"Impressionism","styleCn":"印象派","colorTone":"warm","colorToneCn":"暖色调","description":"莫奈1908年威尼斯之行的成果。总督宫的哥特式建筑在水面的倒影中摇曳，晨光将一切渲染成金色与紫罗兰色的交响。莫奈将威尼斯化为一座漂浮在光与色之上的梦幻之城。","museum":"National Gallery of Art","city":"Washington D.C., USA","museumUrl":"https://www.nga.gov/collection/art-object-page.46587.html","image":"images/monet-nga-palazzo.jpg"},
    {"id":93,"title":"Water Lilies","titleCn":"睡莲","artist":"Claude Monet","artistCn":"克劳德·莫奈","year":1907,"style":"Impressionism","styleCn":"印象派","colorTone":"cold","colorToneCn":"冷色调","description":"莫奈睡莲系列中的经典之作。圆形的莲叶漂浮在倒映着天空的水面上，深蓝与翠绿的色调营造出宁静而深邃的氛围。莫奈在这些作品中打破了传统风景画的空间规则，创造了全新的视觉体验。","museum":"National Gallery of Art","city":"Washington D.C., USA","museumUrl":"https://www.nga.gov/collection/art-object-page.46572.html","image":"images/monet-nga-waterlilies2.jpg"}
  ];

  // 填充筛选下拉框
  const artists = [...new Set(paintings.map(p => p.artistCn))].sort();
  artists.forEach(a => {
    const opt = document.createElement('option');
    opt.value = a;
    opt.textContent = a;
    filterArtist.appendChild(opt);
  });

  const styles = [...new Set(paintings.map(p => p.styleCn))].sort();
  styles.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    filterStyle.appendChild(opt);
  });

  // 渲染画作卡片
  function renderGallery() {
    const artistVal = filterArtist.value;
    const colorVal = filterColor.value;
    const styleVal = filterStyle.value;

    const filtered = paintings.filter(p => {
      if (artistVal !== 'all' && p.artistCn !== artistVal) return false;
      if (colorVal !== 'all' && p.colorTone !== colorVal) return false;
      if (styleVal !== 'all' && p.styleCn !== styleVal) return false;
      return true;
    });

    gallery.innerHTML = '';

    if (filtered.length === 0) {
      emptyState.style.display = 'block';
      return;
    }
    emptyState.style.display = 'none';

    filtered.forEach((p, i) => {
      const card = document.createElement('article');
      card.className = 'painting-card';
      card.style.animationDelay = `${i * 0.06}s`;
      card.innerHTML = `
        <div class="frame">
          <div class="frame-inner">
            <img src="${p.image}" alt="${p.titleCn}" loading="lazy">
          </div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${p.titleCn}</h3>
          <p class="card-title-en">${p.title}</p>
          <div class="card-meta">
            <span class="card-artist">${p.artistCn}</span>
            <span class="card-year">${p.year}</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(p));
      gallery.appendChild(card);
    });
  }

  // 打开模态弹窗
  function openModal(p) {
    document.getElementById('modal-image').src = p.image;
    document.getElementById('modal-image').alt = p.titleCn;
    document.getElementById('modal-title').textContent = p.titleCn;
    document.getElementById('modal-title-en').textContent = p.title + '  (' + p.year + ')';
    document.getElementById('modal-artist').textContent = p.artistCn;
    document.getElementById('modal-year').textContent = p.year + '年';
    document.getElementById('modal-style').textContent = p.styleCn;
    document.getElementById('modal-desc').textContent = p.description;
    document.getElementById('modal-museum-name').textContent = p.museum;
    document.getElementById('modal-museum-city').textContent = p.city;
    document.getElementById('modal-museum-link').href = p.museumUrl;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 关闭弹窗
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 筛选事件
  filterArtist.addEventListener('change', renderGallery);
  filterColor.addEventListener('change', renderGallery);
  filterStyle.addEventListener('change', renderGallery);
  btnReset.addEventListener('click', () => {
    filterArtist.value = 'all';
    filterColor.value = 'all';
    filterStyle.value = 'all';
    renderGallery();
  });

  // 初始渲染
  renderGallery();

  // ===== 动态背景切换 =====
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  const btnVangogh = document.getElementById('btn-vangogh');
  const btnMonet = document.getElementById('btn-monet');
  let currentTheme = null;
  let animationId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 梵高星月夜动态背景
  function drawStarryNight(time) {
    const w = canvas.width, h = canvas.height;
    ctx.fillStyle = '#0a1628';
    ctx.fillRect(0, 0, w, h);

    // 旋涡背景
    for (let i = 0; i < 6; i++) {
      const cx = w * (0.15 + i * 0.15);
      const cy = h * (0.2 + Math.sin(i * 1.2) * 0.15);
      const r = 60 + i * 20;
      for (let j = 0; j < 30; j++) {
        const angle = (j / 30) * Math.PI * 4 + time * 0.0005 * (i % 2 === 0 ? 1 : -1);
        const dist = r * (j / 30);
        const x = cx + Math.cos(angle) * dist;
        const y = cy + Math.sin(angle) * dist;
        ctx.beginPath();
        ctx.arc(x, y, 2 + j * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${210 + j * 2}, 70%, ${40 + j}%, ${0.3 + j * 0.02})`;
        ctx.fill();
      }
    }

    // 流动的笔触线条
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${200 + i * 10}, 60%, ${50 + i * 3}%, 0.15)`;
      ctx.lineWidth = 3 + i * 0.5;
      const startY = h * (0.1 + i * 0.07);
      for (let x = 0; x < w; x += 5) {
        const y = startY + Math.sin((x + time * 0.3) * 0.01 + i) * (20 + i * 5)
                  + Math.cos((x + time * 0.2) * 0.008) * 15;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // 星星
    for (let i = 0; i < 30; i++) {
      const sx = (w * ((i * 137.508) % 100) / 100);
      const sy = (h * 0.5 * ((i * 59.71) % 100) / 100);
      const pulse = Math.sin(time * 0.003 + i * 0.7) * 0.5 + 0.5;
      const radius = 2 + pulse * 4;
      const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 3);
      grd.addColorStop(0, `rgba(255, 230, 100, ${0.8 * pulse})`);
      grd.addColorStop(0.5, `rgba(255, 200, 50, ${0.3 * pulse})`);
      grd.addColorStop(1, 'rgba(255, 200, 50, 0)');
      ctx.beginPath();
      ctx.arc(sx, sy, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 240, 150, ${0.9 * pulse})`;
      ctx.fill();
    }

    // 月亮
    const moonX = w * 0.8, moonY = h * 0.15;
    const moonPulse = Math.sin(time * 0.001) * 0.1 + 0.9;
    const moonGrd = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 50);
    moonGrd.addColorStop(0, `rgba(255, 240, 150, ${moonPulse})`);
    moonGrd.addColorStop(0.6, `rgba(255, 210, 80, ${0.5 * moonPulse})`);
    moonGrd.addColorStop(1, 'rgba(255, 200, 50, 0)');
    ctx.beginPath();
    ctx.arc(moonX, moonY, 50, 0, Math.PI * 2);
    ctx.fillStyle = moonGrd;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(moonX, moonY, 22, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 235, 120, ${moonPulse})`;
    ctx.fill();
  }

  // 莫奈睡莲动态背景
  function drawWaterLilies(time) {
    const w = canvas.width, h = canvas.height;

    // 水面渐变
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#4a7a6a');
    grad.addColorStop(0.3, '#3a6a5a');
    grad.addColorStop(0.7, '#2a5a4a');
    grad.addColorStop(1, '#1a4a3a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 水面波纹
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${150 + i * 10}, 40%, ${50 + i * 3}%, 0.12)`;
      ctx.lineWidth = 2;
      const baseY = h * (0.1 + i * 0.11);
      for (let x = 0; x < w; x += 3) {
        const y = baseY + Math.sin((x + time * 0.2) * 0.005 + i * 0.8) * 8
                  + Math.cos((x + time * 0.15) * 0.003 + i * 1.5) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // 睡莲叶子
    const leaves = [
      {x: 0.15, y: 0.35}, {x: 0.3, y: 0.55}, {x: 0.5, y: 0.4},
      {x: 0.65, y: 0.6}, {x: 0.8, y: 0.35}, {x: 0.4, y: 0.75},
      {x: 0.7, y: 0.8}, {x: 0.2, y: 0.65}, {x: 0.85, y: 0.55}
    ];
    leaves.forEach((leaf, i) => {
      const lx = w * leaf.x + Math.sin(time * 0.0008 + i) * 5;
      const ly = h * leaf.y + Math.cos(time * 0.0006 + i * 0.7) * 3;
      const size = 25 + i * 3;
      ctx.beginPath();
      ctx.ellipse(lx, ly, size, size * 0.7, Math.sin(time * 0.0003 + i) * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${130 + i * 5}, 45%, ${30 + i * 2}%, 0.6)`;
      ctx.fill();
      // 叶脉缺口
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      ctx.lineTo(lx + size * 0.8, ly - size * 0.2);
      ctx.lineTo(lx + size * 0.8, ly + size * 0.2);
      ctx.closePath();
      ctx.fillStyle = `hsla(150, 30%, 40%, 0.3)`;
      ctx.fill();
    });

    // 睡莲花朵
    const flowers = [
      {x: 0.2, y: 0.38}, {x: 0.55, y: 0.42}, {x: 0.75, y: 0.37},
      {x: 0.35, y: 0.72}, {x: 0.6, y: 0.62}
    ];
    flowers.forEach((f, i) => {
      const fx = w * f.x + Math.sin(time * 0.0007 + i * 2) * 4;
      const fy = h * f.y + Math.cos(time * 0.0005 + i * 1.5) * 3;
      const petalCount = 8;
      for (let p = 0; p < petalCount; p++) {
        const angle = (p / petalCount) * Math.PI * 2 + time * 0.0002 + i;
        const px = fx + Math.cos(angle) * 12;
        const py = fy + Math.sin(angle) * 8;
        ctx.beginPath();
        ctx.ellipse(px, py, 8, 4, angle, 0, Math.PI * 2);
        const hue = i % 2 === 0 ? 330 : 30;
        ctx.fillStyle = `hsla(${hue}, 60%, ${75 + Math.sin(time * 0.002 + p) * 10}%, 0.7)`;
        ctx.fill();
      }
      // 花蕊
      ctx.beginPath();
      ctx.arc(fx, fy, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 220, 100, 0.8)';
      ctx.fill();
    });

    // 光斑反射
    for (let i = 0; i < 15; i++) {
      const rx = (w * ((i * 97.3) % 100) / 100);
      const ry = (h * ((i * 63.7) % 100) / 100);
      const rAlpha = (Math.sin(time * 0.002 + i * 1.3) * 0.5 + 0.5) * 0.2;
      ctx.beginPath();
      ctx.arc(rx, ry, 3 + Math.sin(time * 0.003 + i) * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 230, 210, ${rAlpha})`;
      ctx.fill();
    }
  }

  function animate(time) {
    if (!currentTheme) return;
    if (currentTheme === 'vangogh') drawStarryNight(time);
    else if (currentTheme === 'monet') drawWaterLilies(time);
    animationId = requestAnimationFrame(animate);
  }

  function activateTheme(theme) {
    if (currentTheme === theme) {
      // 再次点击取消主题
      currentTheme = null;
      cancelAnimationFrame(animationId);
      canvas.classList.remove('active');
      document.body.classList.remove('theme-active', 'theme-vangogh', 'theme-monet');
      btnVangogh.classList.remove('active');
      btnMonet.classList.remove('active');
      return;
    }
    currentTheme = theme;
    document.body.classList.add('theme-active');
    document.body.classList.remove('theme-vangogh', 'theme-monet');
    document.body.classList.add('theme-' + theme);
    canvas.classList.add('active');
    btnVangogh.classList.toggle('active', theme === 'vangogh');
    btnMonet.classList.toggle('active', theme === 'monet');
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animate);
  }

  btnVangogh.addEventListener('click', () => activateTheme('vangogh'));
  btnMonet.addEventListener('click', () => activateTheme('monet'));
})();
