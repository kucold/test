let service = document.querySelector('.serviceBg');
let close = document.querySelector('.close');
let politicks = document.querySelectorAll('.politick');
let polImgs = document.querySelectorAll('.polImg');


politicks[0].onclick = function(){
    polImgs[0].classList.toggle('polImgAct')
}
politicks[1].onclick = function(){
    polImgs[1].classList.toggle('polImgAct')
}


    service.onclick = function(){
    service.classList.toggle('serviceBgAct')  };

    

$('body').on('click', '.slick-center', function () { service.classList.toggle('serviceBgAct') })
let textInSer = document.querySelector('.textInSer');
let hInSer = document.querySelector('.hInSer')
$('body').on('click', '.slideOne', '.hInSer' ,function () { 
    textInSer.textContent = 'Будучи представителем технического заказчика, мы защищаем экономические и юридические интересы Заказчика (Застройщика) и инвестора. Доверяя свою идею нам, Вы можете спокойно заниматься любимым делом. Наша организация имеет в своем штате проектировщиков, подрядчиков, юристов и инженеров, которые организуют контроль всех этапов строительного процесса, согласуют проектную документацию, получат необходимые разрешения, обеспечат бесперебойность и безопасность работ, помогут избежать возможных непредвиденных обстоятельств, а если они возникли, то помогут найти выход из любой сложившейся ситуации.' 
    hInSer.textContent = 'Осуществление функций технического заказчика' 
})
$('body').on('click', '.slideTwo', '.hInSer' ,function () { 
    textInSer.textContent = 'ООО «СНК» проводит строительную экспертизу в отношении:\n●Зданий и сооружений;\n●Качества строительно-монтажных работ;\n●Исполнительной документации;\n●Объектов промышленного производства;\n●Индивидуальных жилых домов и квартир;\n●Сметной документации.'
    hInSer.textContent = 'Строительно-техническая экспертиза' 
})
$('body').on('click', '.slideThree', '.hInSer' ,function () { 
    textInSer.textContent = 'В процессе подготовки к строительству и реализации проекта, составляются и согласуются тысячи документов. Это и проектная, и исходно-разрешительная документация, и всевозможные разрешения на ведение строительства и ввод объекта в эксплуатацию. Мы всегда рады оказать профессиональную помощь в оформлении документации и сопровождении строительного процесса.'
    hInSer.textContent = 'Документальное сопровождение строительства' 
})
$('body').on('click', '.slideFour', '.hInSer' ,function () { 
    textInSer.textContent = 'Доверяя нам строительный контроль и технический надзор в ходе реализации проекта, Вы делаете выбор в пользу обеспечения соблюдения сроков, определяемых проектом, а такж в пользу соблюдения объемов, стоимости и качества производимых работ и используемых строительных материалов.Строительный контроль включает в себя следующие мероприятия:●Проверка полноты и соблюдения установленных сроков выполнения подрядчиком входного контроля и достоверности документирования его результатов.●Осуществление входного контроля, включая проверку наличия и содержания документов от  поставщиков, содержащих сведения о качестве поставленной ими продукции, ее соответствии требованиям рабочей документации, техническим регламентам, стандартам и сводам правил.●Проверка выполнения подрядчиком контрольных мероприятий по соблюдению правил складирования и хранения применяемой продукции и достоверности документирования  результатов.●Проверка полноты и соблюдения установленных сроков выполнения подрядчиком работ, контроля последовательности и состава технологических операций по осуществлению строительства объектов капитального строительства и достоверности документирования  результатов.●Освидетельствование скрытых работ и промежуточная приемка возведенных строительных конструкций, влияющих на безопасность объекта капитального строительства, участков сетей инженерно-технического обеспечения.●Проверка совместно с подрядчиком соответствия законченного строительством объекта требованиям проектной и подготовленной на ее основе рабочей документации, результатам инженерных изысканий, требованиям градостроительного плана земельного участка, требованиям технических регламентов.'
    hInSer.textContent = 'Строительный контроль и технический надзор' 
})
$('body').on('click', '.slideFive', '.hInSer' ,function () { 
    textInSer.textContent = 'Реконструкция, капитальный ремонт и обследование зданий – это связанные между собой процессы. С течением времени здания и сооружения изнашиваются, деформируются, ухудшаются их эксплуатационные свойства. Наша компания проводит технические обследования, которые помогают определить категорию технического состояния объекта, понять, какие конструкции нуждаются в замене, потребуется ли перепланировка, какие восстановительные работы необходимо выполнить. Обследование здания – один из этапов на пути к согласованию проекта реконструкции и получению разрешения на его реализацию. Не имея развернутого представления о состоянии объекта, проводить реконструкцию нельзя  по причине высокой опасности.'
    hInSer.textContent = 'Обследование зданий и сооружений'
})
$('body').on('click', '.slideSix', '.hInSer' ,function () { 
    textInSer.textContent = 'Наш коллектив – это команда профессионалов. Мы контролируем качество архитектурно-строительного проектирования на всех стадиях работ, начиная с предпроектных проработок и до выпуска рабочей документации. Мы четко знаем свою работу и всегда готовы помочь в решении задач, стоящих перед Заказчиком. Сотрудничаяс нами, Вы экономите свое время и деньги, доверяете работу компании, нацеленной на результат. Мы разрабатываем проектную документацию на здания и сооружения различного назначения: административные и складские здания, торговые центры, индивидуальные и многоквартирные жилые дома и т.д. Выполняем проектирование промышленных зданий. Проектируем внутренние и наружные инженерные сети (водоснабжение, отопление, водоотведение, кондиционирование, электрика, охранная/пожарная сигнализация, сети связи, тепловые сети).'
    hInSer.textContent = 'Архитектурно-строительное проектирование' 
})
$('body').on('click', '.slideSeven', '.hInSer' ,function () { 
    textInSer.textContent = 'Дизайн интерьера направлен на то, чтобы обеспечить удобство и эстетически приятное взаимодействие среды с людьми. Дизайнер выполняет оптимизацию труда в помещении, улучшает навигацию в крупных помещениях, разрабатывает оформление специализированных помещений согласно требованиям клиентов. Дизайнер управляет всем процессом оформления интерьера, начиная с планировки помещения, освещения, систем вентиляции, акустики, отделки стен и заканчивая размещением мебели и установкой навигационных знаков.'
    hInSer.textContent = 'Разработка дизайн проекта' 
})