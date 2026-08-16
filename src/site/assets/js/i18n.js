const translations = new Map([
  // Navegación, metadatos y controles globales
  ["Saltar al contenido", "Skip to content"],
  ["CREA Design Studio, inicio", "CREA Design Studio, home"],
  ["Abrir menú", "Open menu"],
  ["Cerrar menú", "Close menu"],
  ["Navegación principal", "Main navigation"],
  ["Cambiar idioma a inglés", "Switch language to English"],
  ["Servicios", "Services"],
  ["Proceso", "Process"],
  ["Filosofía", "Philosophy"],
  ["Casos", "Case Studies"],
  ["Contacto", "Contact"],
  ["Formulario", "Contact Form"],
  ["Estudio", "Studio"],
  ["Conectá", "Connect"],
  ["Información legal", "Legal information"],
  ["Privacidad", "Privacy"],
  ["Términos", "Terms"],
  ["Términos de uso", "Terms of Use"],
  ["Volver al inicio", "Back to home"],
  ["Volver arriba", "Back to top"],
  ["CREA Design Studio — Legados visuales", "CREA Design Studio — Visual Legacies"],
  ["Estudio boutique de branding, social media y web para marcas que quieren cobrar más y no competir por precio.", "Boutique branding, social media, and web studio for brands that want to charge more and stop competing on price."],
  ["Branding, social media y web para marcas que quieren elevar su categoría.", "Branding, social media, and web for brands ready to elevate their category."],
  ["Estudio boutique de branding, social media y web.", "Boutique branding, social media, and web studio."],
  ["es_AR", "en_US"],

  // Portada
  ["Estudio Boutique", "Boutique Studio"],
  ["No solo diseñamos,", "We don't just design,"],
  ["creamos legados visuales.", "we create visual legacies."],
  ["Agendar llamada", "Schedule a call"],
  ["Ver proyectos", "View projects"],
  ["Sumate al equipo", "Join the team"],
  ["Datos del estudio", "Studio figures"],
  ["Proyectos", "Projects"],
  ["Sectores", "Sectors"],
  ["Recurrencia", "Repeat business"],

  // Servicios
  ["Sistemas visuales para marcas", "Visual systems for brands"],
  ["que juegan en serio", "that mean business"],
  ["Manual de marca que no se queda en un PDF olvidado. Sistema visual completo aplicable a todos los puntos de contacto de tu negocio.", "A brand guide that won't sit forgotten in a PDF. A complete visual system designed for every touchpoint in your business."],
  ["Identidad visual completa", "Complete visual identity"],
  ["Manual de aplicación", "Application guidelines"],
  ["Templates editables", "Editable templates"],
  ["Librería de assets", "Asset library"],
  ["Feeds que parecen editoriales, no catálogos. Diseño de contenido para Instagram, LinkedIn y TikTok.", "Feeds that feel like editorials, not catalogs. Content design for Instagram, LinkedIn, and TikTok."],
  ["Estrategia de contenidos", "Content strategy"],
  ["Grillas y templates", "Grids and templates"],
  ["Guía de uso para el equipo", "Team usage guide"],
  ["Sitios que parecen trailer, no brochure. Desarrollo de experiencias responsivas con animaciones fluidas.", "Websites that feel like trailers, not brochures. Responsive experiences with fluid animations."],
  ["Diseño UI/UX premium", "Premium UI/UX design"],
  ["Desarrollo web", "Web development"],
  ["Optimización performance & SEO", "Performance & SEO optimization"],
  ["Dirección de arte senior para campañas, lanzamientos y sesiones, sin contratar equipo in-house.", "Senior art direction for campaigns, launches, and shoots—without hiring an in-house team."],
  ["Concepto creativo", "Creative concept"],
  ["Dirección de sesiones", "Shoot direction"],
  ["Supervisión de piezas clave", "Key asset supervision"],
  ["Infraestructura pensada para marcas que no pueden caerse. Hosting gestionado y entornos listos para escalar.", "Infrastructure built for brands that cannot afford downtime. Managed hosting and environments ready to scale."],
  ["Configuración de dominio y DNS", "Domain and DNS setup"],
  ["Hosting optimizado", "Optimized hosting"],
  ["SSL, backups y monitoreo básico", "SSL, backups, and basic monitoring"],
  ["Hosting & Infraestructura", "Hosting & Infrastructure"],
  ["Diseño Gráfico", "Graphic Design"],
  ["Soporte gráfico para tu día a día: piezas puntuales alineadas al sistema visual de tu marca.", "Day-to-day graphic support: focused assets aligned with your brand's visual system."],
  ["Material publicitario y piezas digitales", "Advertising and digital assets"],
  ["Presentaciones y documentos clave", "Presentations and key documents"],
  ["Material para lanzamientos y campañas", "Launch and campaign materials"],
  ["Dirección", "Direction"],
  ["Diseño", "Design"],
  ["Servicios disponibles", "Available services"],
  ["Cerrar información del servicio", "Close service information"],

  // Proceso y filosofía
  ["Laboratorio", "Laboratory"],
  ["De boceto a sistema visual completo. Nuestro proceso transforma ideas en marcas que generan impacto medible.", "From sketch to complete visual system. Our process turns ideas into brands that create measurable impact."],
  ["Exploramos el territorio visual", "We explore the visual landscape"],
  ["Investigación profunda de sector, competencia y referencias para encontrar el lenguaje único de la marca.", "In-depth research into the sector, competitors, and references to uncover the brand's unique visual language."],
  ["Tensionamos la marca", "We challenge the brand"],
  ["Exploraciones de múltiples rutas visuales y conceptuales hasta encontrar la que genera mayor diferenciación.", "We explore multiple visual and conceptual directions until we find the one that creates the strongest differentiation."],
  ["Diseñamos sistemas, no solo logos", "We design systems, not just logos"],
  ["Identidad aplicable a todos los puntos de contacto: social, web, packaging y piezas clave de comunicación.", "An identity that works across every touchpoint: social, web, packaging, and key communication assets."],
  ["Activamos la marca", "We activate the brand"],
  ["Lanzamiento estratégico en social media y ecosistema digital con plan de contenidos inicial incluido.", "Strategic launch across social media and the digital ecosystem, including an initial content plan."],
  ["Nosotros", "About Us"],
  ["Somos un estudio boutique que combina estrategia, diseño y contenido para marcas que quieren jugar en ligas mayores. Trabajamos cerca de founders, equipos y marcas que entienden que el diseño es una palanca de negocio, no decoración.", "We are a boutique studio that combines strategy, design, and content for brands ready to play at the highest level. We work closely with founders, teams, and brands that see design as a business lever—not decoration."],
  ["Creemos en marcas que se toman la estética tan en serio como sus números.", "We believe in brands that take aesthetics as seriously as their numbers."],
  ["No trabajamos con cualquiera: buscamos marcas que quieran elevar su categoría.", "We don't work with just anyone: we look for brands determined to elevate their category."],
  ["El diseño es inversión estratégica, no gasto decorativo.", "Design is a strategic investment, not a decorative expense."],

  // Portfolio y resultados
  ["Proyectos que hablan", "Projects that speak"],
  ["con números", "through results"],
  ["Cada proyecto es un caso de negocio, no solo un trabajo estético.", "Every project is a business case, not just an aesthetic exercise."],
  ["Marca Premium · Beauty", "Premium Brand · Beauty"],
  ["Educación · E-learning", "Education · E-learning"],
  ["Derito Legal · Estudio jurídico", "Derito Legal · Law Firm"],
  ["Alquiler de autos · Hertz", "Car Rental · Hertz"],
  ["en 90 días", "in 90 days"],
  ["seguidores orgánicos", "organic followers"],
  ["ticket promedio", "average order value"],
  ["reservas vía web", "web reservations"],
  ["Cobertura", "Coverage"],
  ["en medios", "in the media"],
  ["Feed editorial", "Editorial feed"],
  ["de lujo", "luxury style"],
  ["CTR en Instagram", "CTR on Instagram"],
  ["3.5% engagement sostenido", "3.5% sustained engagement"],
  ["engagement sostenido", "sustained engagement"],
  ["inscripciones orgánicas", "organic enrollments"],
  ["precio de curso", "course price"],
  ["finalización", "completion rate"],
  ["conversión en landing", "landing-page conversion"],
  ["Cierre con clientes", "Client wins"],
  ["tiempo en sitio", "time on site"],
  ["leads cualificados", "qualified leads"],
  ["tiempo de cierre", "closing time"],
  ["Ellos nos acompañan", "They support us"],
  ["Alianzas que impulsan ideas, procesos y resultados compartidos.", "Partnerships that drive ideas, processes, and shared results."],
  ["Sponsors de CREA Design Studio", "CREA Design Studio sponsors"],
  ["Sponsor provisional 01", "Placeholder sponsor 01"],
  ["Sponsor provisional 02", "Placeholder sponsor 02"],
  ["Sponsor provisional 03", "Placeholder sponsor 03"],
  ["Sponsor provisional 04", "Placeholder sponsor 04"],
  ["Sponsor provisional 05", "Placeholder sponsor 05"],

  // Acompañamiento estratégico
  ["Acompañamiento estratégico para empresas", "Strategic Business Support"],
  ["Potenciamos el proyecto", "We take your project"],
  ["más allá de lo visual", "beyond the visual"],
  ["Una mirada integral para ordenar decisiones, alinear personas y transformar objetivos en un plan de acción concreto.", "A comprehensive perspective to organize decisions, align people, and turn objectives into a concrete action plan."],
  ["Consultoría integral", "Comprehensive Consulting"],
  ["Diagnóstico, prioridades y acompañamiento transversal para detectar oportunidades y fortalecer cada dimensión del proyecto.", "Diagnosis, priorities, and cross-functional guidance to uncover opportunities and strengthen every dimension of the project."],
  ["Gestión de equipos", "Team Management"],
  ["Organización de roles, coordinación y dinámicas de trabajo para que el talento avance con claridad hacia un objetivo compartido.", "Role definition, coordination, and working dynamics that help talent move clearly toward a shared objective."],
  ["Planificación estratégica", "Strategic Planning"],
  ["Definición de hoja de ruta, etapas y criterios de seguimiento para convertir la visión en resultados sostenibles y medibles.", "Roadmap, phases, and tracking criteria that turn vision into sustainable, measurable results."],
  ["Todo lo necesario para sacar el máximo potencial al proyecto.", "Everything needed to unlock the project's full potential."],

  // Contacto y pie
  ["¿Listo para dar el próximo salto?", "Ready to take the next leap?"],
  ["Cuéntanos en una frase qué quieres lograr. El resto es nuestra parte.", "Tell us in one sentence what you want to achieve. We'll take care of the rest."],
  ["Nombre", "Name"],
  ["Tu nombre completo", "Your full name"],
  ["Instagram / Web actual", "Current Instagram / Website"],
  ["(opcional)", "(optional)"],
  ["@tuinstagram o www.tusitio.com", "@yourinstagram or www.yoursite.com"],
  ["Presupuesto estimado", "Estimated budget"],
  ["Selecciona una opción", "Select an option"],
  ["Estoy explorando opciones", "I'm exploring options"],
  ["Lista para invertir seriamente", "Ready to make a serious investment"],
  ["Busco una alianza estratégica", "I'm looking for a strategic partnership"],
  ["Soy emprendedor", "I'm an entrepreneur"],
  ["Tengo una startup en crecimiento", "I have a growing startup"],
  ["¿Qué quieres lograr con tu marca?", "What do you want to achieve with your brand?"],
  ["Ej.: posicionar mi marca como opción premium en mi sector", "E.g., position my brand as the premium choice in my sector"],
  ["Leí y acepto la", "I have read and accept the"],
  ["política de privacidad", "privacy policy"],
  ["Enviar proyecto", "Submit project"],
  ["Enviando…", "Sending…"],
  ["Proyecto enviado. Gracias por escribirnos.", "Project submitted. Thank you for contacting us."],
  ["Proyecto enviado", "Project submitted"],
  ["No pudimos enviarlo. Podés escribir a estudiodcrea@gmail.com.", "We couldn't send it. You can email us at estudiodcrea@gmail.com."],
  ["Reintentar", "Try again"],
  ["Estudio boutique de branding,", "Boutique branding,"],
  ["social media y web.", "social media, and web studio."],
  ["¿Sos diseñador, developer o creativo? Enviános tu portfolio y contanos por qué te gustaría sumarte a nuestro equipo.", "Are you a designer, developer, or creative? Send us your portfolio and tell us why you'd like to join our team."],
  ["Enviar correo", "Send email"],
  ["CREA Design Studio. Todos los derechos reservados.", "CREA Design Studio. All rights reserved."],

  // Preguntas frecuentes
  ["Preguntas frecuentes", "Frequently Asked Questions"],
  ["Cerrar preguntas frecuentes", "Close frequently asked questions"],
  ["Antes de empezar", "Before We Begin"],
  ["Respuestas claras antes de empezar a trabajar juntos.", "Clear answers before we start working together."],
  ["¿Con qué tipo de empresas trabajan?", "What types of companies do you work with?"],
  ["Trabajamos con marcas, emprendimientos y equipos que buscan construir, ordenar o escalar su identidad y comunicación.", "We work with brands, startups, and teams looking to build, organize, or scale their identity and communications."],
  ["¿Qué servicios puedo contratar?", "What services can I hire you for?"],
  ["Podés contratar branding, estrategia de contenidos, social media, diseño y desarrollo web, dirección de arte, infraestructura digital y acompañamiento estratégico.", "You can hire us for branding, content strategy, social media, web design and development, art direction, digital infrastructure, and strategic support."],
  ["¿Puedo contratar un servicio puntual?", "Can I hire you for a one-off service?"],
  ["Sí. Evaluamos proyectos integrales y necesidades específicas, siempre que podamos aportar un resultado sólido y coherente.", "Yes. We consider both comprehensive projects and specific needs, as long as we can deliver a solid, coherent result."],
  ["¿Cómo comienza un proyecto?", "How does a project begin?"],
  ["Comenzamos con una conversación de diagnóstico para comprender objetivos, contexto, alcance, tiempos y prioridades.", "We begin with a discovery conversation to understand your objectives, context, scope, timeline, and priorities."],
  ["¿Cuánto tiempo demora un proyecto?", "How long does a project take?"],
  ["Depende del alcance. Después del diagnóstico presentamos un cronograma claro con etapas, entregables y fechas estimadas.", "It depends on scope. After discovery, we present a clear timeline with phases, deliverables, and estimated dates."],
  ["¿Cómo se define el presupuesto?", "How is the budget determined?"],
  ["El presupuesto se construye según alcance, complejidad, tiempos y recursos necesarios. Cada propuesta detalla qué incluye.", "The budget is based on scope, complexity, timeline, and required resources. Each proposal details what is included."],
  ["¿Cuántas revisiones están incluidas?", "How many revision rounds are included?"],
  ["La cantidad se establece en la propuesta. Organizamos cada instancia para consolidar decisiones y evitar ciclos innecesarios.", "The number is defined in the proposal. We structure each round to consolidate decisions and avoid unnecessary cycles."],
  ["¿Trabajan con clientes de otros países?", "Do you work with clients in other countries?"],
  ["Sí. Nuestro proceso es remoto y está preparado para trabajar con equipos y marcas de cualquier ubicación.", "Yes. Our process is remote and designed to work with teams and brands anywhere."],
  ["¿Qué necesitan de nuestro equipo?", "What do you need from our team?"],
  ["Necesitamos un referente disponible, información relevante y devoluciones claras en los momentos acordados.", "We need an available point of contact, relevant information, and clear feedback at the agreed stages."],
  ["¿Ofrecen acompañamiento después de la entrega?", "Do you offer support after delivery?"],
  ["Sí. Podemos continuar con implementación, soporte, evolución de marca, contenidos y acompañamiento estratégico.", "Yes. We can continue with implementation, support, brand evolution, content, and strategic guidance."],

  // Modal y páginas de casos
  ["Cerrar proyecto", "Close project"],
  ["Cliente", "Client"],
  ["Sector", "Sector"],
  ["Año", "Year"],
  ["El desafío", "The challenge"],
  ["La solución", "The solution"],
  ["Resultados", "Results"],
  ["Galería", "Gallery"],
  ["Galería del proyecto", "Project gallery"],
  ["← Proyecto anterior", "← Previous project"],
  ["Siguiente proyecto →", "Next project →"],
  ["← Volver al portfolio", "← Back to portfolio"],
  ["Contanos tu proyecto", "Tell us about your project"],
  ["Beauty Premium — CREA Design Studio", "Beauty Premium — CREA Design Studio"],
  ["Restaurant Group — CREA Design Studio", "Restaurant Group — CREA Design Studio"],
  ["Fashion Lifestyle — CREA Design Studio", "Fashion Lifestyle — CREA Design Studio"],
  ["Educación E-learning — CREA Design Studio", "Education E-learning — CREA Design Studio"],
  ["Derito Legal — CREA Design Studio", "Derito Legal — CREA Design Studio"],
  ["Hertz Mobility — CREA Design Studio", "Hertz Mobility — CREA Design Studio"],
  ["Beauty Studio Premium", "Beauty Studio Premium"],
  ["Grupo Gastronómico del Sur", "Southern Restaurant Group"],
  ["Educación Online", "Online Education"],
  ["Estudio jurídico", "Law firm"],
  ["Alquiler de autos", "Car rental"],
  ["Reposicionamiento de una marca de belleza como opción premium en su sector.", "Repositioning a beauty brand as the premium choice in its sector."],
  ["Reposicionamiento de marca de belleza como opción premium en su sector", "Repositioning a beauty brand as the premium choice in its sector"],
  ["La marca necesitaba diferenciarse de la competencia local y justificar precios premium sin perder clientes actuales. Su percepción visual era genérica y no transmitía el nivel de servicio ofrecido.", "The brand needed to stand apart from local competitors and justify premium pricing without losing existing clients. Its generic visual presence failed to convey the quality of its service."],
  ["El cliente necesitaba diferenciarse de la competencia local y justificar precios premium sin perder clientes actuales. La percepción de marca era genérica y no transmitía el nivel de servicio que ofrecían.", "The client needed to stand apart from local competitors and justify premium pricing without losing existing clients. The brand felt generic and failed to convey the quality of its service."],
  ["Desarrollamos un sistema de identidad sofisticado, una dirección fotográfica editorial y una experiencia web tipo revista. La comunicación social se ordenó con templates y criterios de contenido consistentes.", "We developed a sophisticated identity system, editorial photography direction, and a magazine-style web experience. Social communication was organized through templates and consistent content standards."],
  ["Desarrollamos un sistema de identidad visual sofisticado con paleta neutra y acentos dorados, fotografía editorial de alta calidad y una experiencia web tipo revista de lujo. Rediseñamos la comunicación en redes sociales con templates de marca y una estrategia de contenidos premium.", "We developed a sophisticated visual identity with a neutral palette and gold accents, high-quality editorial photography, and a luxury magazine-style web experience. We also redesigned social communication with branded templates and a premium content strategy."],
  ["Aumento del ticket promedio 35%", "35% increase in average order value"],
  ["Aumento de ticket promedio 35%", "35% increase in average order value"],
  ["Retención de 90% de clientes existentes", "90% retention of existing clients"],
  ["+40% engagement en 90 días", "+40% engagement in 90 days"],
  ["0 → 12k seguidores orgánicos", "0 → 12k organic followers"],
  ["Aplicación digital del sistema Beauty Premium", "Digital application of the Beauty Premium system"],
  ["Comunicación visual Beauty Premium", "Beauty Premium visual communication"],
  ["Detalle del sistema gráfico Beauty Premium", "Detail of the Beauty Premium graphic system"],
  ["Pieza de identidad Beauty Premium", "Beauty Premium identity asset"],
  ["Sistema visual de Beauty Premium", "Beauty Premium visual system"],
  ["Sistema visual de la marca Beauty Premium", "Beauty Premium brand visual system"],
  ["¿Querés construir una marca que eleve su categoría?", "Want to build a brand that elevates its category?"],

  ["Dirección de arte y sistema visual para una experiencia gastronómica contemporánea.", "Art direction and a visual system for a contemporary dining experience."],
  ["Dirección de arte y sistema visual para grupo gastronómico", "Art direction and a visual system for a restaurant group"],
  ["El grupo operaba tres locales sin una identidad unificada, con menús desactualizados y una narrativa fotográfica insuficiente. Necesitaba modernizar la experiencia sin perder su esencia.", "The group operated three venues without a unified identity, with outdated menus and an insufficient photographic narrative. It needed to modernize the experience without losing its essence."],
  ["Grupo con tres locales sin identidad unificada, menús físicos desactualizados y fotografía amateur de platos. Necesitaban modernizar sin perder esencia.", "A three-venue group with no unified identity, outdated printed menus, and amateur food photography. It needed to modernize without losing its essence."],
  ["Construimos una dirección de arte coherente, un sistema de menú contemporáneo y una narrativa de alto contraste para unificar cada punto de contacto conservando el carácter de los espacios.", "We created cohesive art direction, a contemporary menu system, and a high-contrast visual narrative to unify every touchpoint while preserving each space's character."],
  ["Construimos una dirección de arte coherente, un sistema de menú contemporáneo y una narrativa fotográfica de alto contraste capaz de unificar los puntos de contacto sin borrar la personalidad de cada local.", "We created cohesive art direction, a contemporary menu system, and a high-contrast photographic narrative that unified every touchpoint without erasing each venue's personality."],
  ["Menú fotográfico tipo revista", "Magazine-style photographic menu"],
  ["+50% reservas vía web", "+50% web reservations"],
  ["Cobertura en medios gastronómicos", "Coverage in food and hospitality media"],
  ["Incremento de 25% en ticket promedio", "25% increase in average order value"],
  ["Incremento 25% ticket promedio", "25% increase in average order value"],
  ["Entrada de un restaurante contemporáneo con dirección de arte oscura y magenta", "Entrance to a contemporary restaurant with dark, magenta art direction"],
  ["Entrada del restaurante con dirección de arte oscura y magenta", "Restaurant entrance with dark, magenta art direction"],
  ["Interior del restaurante", "Restaurant interior"],
  ["Sistema de identidad gastronómica", "Restaurant identity system"],
  ["Detalle de menú y tarjeta", "Menu and card detail"],
  ["Dirección de arte culinaria", "Culinary art direction"],
  ["Packaging y piezas de identidad", "Packaging and identity assets"],
  ["¿Tu experiencia de marca necesita una dirección clara?", "Does your brand experience need a clear direction?"],

  ["Ecosistema de contenido y dirección fotográfica para una marca de moda sustentable.", "Content ecosystem and photography direction for a sustainable fashion brand."],
  ["Ecosistema de contenido para marca de moda sustentable", "Content ecosystem for a sustainable fashion brand"],
  ["La marca tenía un producto diferenciado pero una presencia digital genérica que no expresaba sus valores ni construía deseo alrededor de la propuesta.", "The brand had a distinctive product but a generic digital presence that neither expressed its values nor built desire around its offer."],
  ["Marca con producto diferenciado pero sin una presencia digital fuerte, con un feed genérico que no reflejaba sus valores de sustentabilidad.", "A brand with a distinctive product but no strong digital presence, and a generic feed that failed to reflect its sustainability values."],
  ["Diseñamos un feed editorial, una guía fotográfica y templates capaces de narrar cada prenda mientras sostienen una voz visual reconocible en el tiempo.", "We designed an editorial feed, photography guide, and templates that tell the story of every garment while maintaining a recognizable visual voice over time."],
  ["Creamos un feed editorial de lujo, fotografía lifestyle cuidada, templates para narrar cada prenda y una guía completa para sostener la dirección de arte.", "We created a luxury editorial feed, carefully directed lifestyle photography, templates to tell the story of each garment, and a complete guide to maintain the art direction."],
  ["Feed tipo editorial de lujo", "Luxury editorial-style feed"],
  ["+28% CTR en Instagram", "+28% Instagram CTR"],
  ["3.5% engagement rate sostenido", "Sustained 3.5% engagement rate"],
  ["+40% ventas por Instagram en tres meses", "+40% Instagram sales in three months"],
  ["+40% ventas por Instagram en 3 meses", "+40% Instagram sales in three months"],
  ["Ecosistema visual editorial para una marca de moda", "Editorial visual ecosystem for a fashion brand"],
  ["Sistema editorial de Fashion Lifestyle", "Fashion Lifestyle editorial system"],
  ["Pieza editorial Fashion Lifestyle 1", "Fashion Lifestyle editorial asset 1"],
  ["Pieza editorial Fashion Lifestyle 2", "Fashion Lifestyle editorial asset 2"],
  ["Pieza editorial Fashion Lifestyle 3", "Fashion Lifestyle editorial asset 3"],
  ["Pieza editorial Fashion Lifestyle 4", "Fashion Lifestyle editorial asset 4"],
  ["Pieza editorial Fashion Lifestyle 5", "Fashion Lifestyle editorial asset 5"],
  ["¿Tu contenido necesita una identidad reconocible?", "Does your content need a recognizable identity?"],

  ["Rebranding integral para una plataforma educativa online.", "Complete rebranding for an online education platform."],
  ["Rebranding completo de plataforma educativa online", "Complete rebranding of an online education platform"],
  ["La plataforma tenía una marca amateur que no justificaba sus precios y competía en un mercado saturado sin una diferenciación clara.", "The platform had an amateur brand that failed to justify its pricing and competed in a saturated market without clear differentiation."],
  ["Plataforma educativa con una marca amateur que no justificaba precios altos. Competía en un mercado saturado sin una diferenciación clara.", "An education platform with an amateur brand that failed to justify premium pricing. It competed in a saturated market without clear differentiation."],
  ["Construimos una identidad premium, rediseñamos la experiencia de la plataforma y creamos un sistema de contenidos para posicionarla como referente de su sector.", "We built a premium identity, redesigned the platform experience, and created a content system to position it as a leader in its sector."],
  ["Desarrollamos una identidad premium, rediseñamos la experiencia de la plataforma y construimos una estrategia de contenidos orientada a posicionarla como referente.", "We developed a premium identity, redesigned the platform experience, and built a content strategy to position it as a category leader."],
  ["Posicionamiento premium en el sector", "Premium positioning in the sector"],
  ["+200% inscripciones orgánicas", "+200% organic enrollments"],
  ["Precio del curso aumentado 60%", "60% increase in course price"],
  ["Tasa de finalización +25%", "+25% completion rate"],
  ["Sistema de identidad para una plataforma de educación en línea", "Identity system for an online education platform"],
  ["Sistema de identidad para educación en línea", "Identity system for online education"],
  ["Campaña educativa 1", "Education campaign 1"],
  ["Sistema educativo 2", "Education system 2"],
  ["Sistema educativo 3", "Education system 3"],
  ["Sistema educativo 4", "Education system 4"],
  ["Sistema educativo 5", "Education system 5"],
  ["Sistema educativo 6", "Education system 6"],
  ["¿Tu propuesta necesita demostrar mejor su valor?", "Does your offer need to demonstrate its value more clearly?"],

  ["Identidad y experiencia web para un estudio jurídico contemporáneo.", "Identity and web experience for a contemporary law firm."],
  ["Identidad y web para estudio jurídico", "Identity and website for a law firm"],
  ["El estudio no tenía una identidad visual clara y necesitaba transmitir confiabilidad y modernidad para captar nuevos clientes.", "The firm lacked a clear visual identity and needed to convey trust and modernity to attract new clients."],
  ["El estudio no tenía una identidad visual clara y necesitaba transmitir confiabilidad y modernidad para captar clientes.", "The firm lacked a clear visual identity and needed to convey trust and modernity to attract clients."],
  ["Diseñamos un sistema de marca minimalista, una experiencia web con microinteracciones y una narrativa enfocada en beneficios de negocio.", "We designed a minimalist brand system, a web experience with microinteractions, and a narrative focused on business benefits."],
  ["Diseñamos un sistema de marca minimalista, una experiencia web con microinteracciones y una narrativa orientada a beneficios de negocio.", "We designed a minimalist brand system, a web experience with microinteractions, and a narrative centered on business benefits."],
  ["+120% conversión en landing", "+120% landing-page conversion"],
  ["Reducción de 45% en bounce rate", "45% reduction in bounce rate"],
  ["Reducción 45% bounce rate", "45% reduction in bounce rate"],
  ["Sistema visual unificado", "Unified visual system"],
  ["Cierre con clientes Serie A", "Series A client wins"],
  ["Identidad y experiencia digital de Derito Legal", "Derito Legal digital identity and experience"],
  ["Aplicación Derito Legal 1", "Derito Legal application 1"],
  ["Aplicación Derito Legal 2", "Derito Legal application 2"],
  ["Aplicación Derito Legal 3", "Derito Legal application 3"],
  ["Aplicación Derito Legal 4", "Derito Legal application 4"],
  ["Aplicación Derito Legal 5", "Derito Legal application 5"],
  ["¿Tu presencia digital transmite el nivel de tu trabajo?", "Does your digital presence reflect the quality of your work?"],

  ["Ecosistema digital y piezas de comunicación para alquiler de autos.", "Digital ecosystem and communication assets for a car rental company."],
  ["Ecosistema digital para empresa de alquiler de autos", "Digital ecosystem for a car rental company"],
  ["El proyecto requería una presencia web clara y una base visual consistente para posicionar la empresa y ordenar su comunicación.", "The project required a clear web presence and a consistent visual foundation to position the company and organize its communication."],
  ["El proyecto requería una presencia web clara y una base visual consistente para posicionar la empresa en buscadores y ordenar su comunicación.", "The project required a clear web presence and a consistent visual foundation to position the company in search engines and organize its communication."],
  ["Desarrollamos la experiencia web y un sistema de piezas para folletería, videos publicitarios y contenidos en redes sociales.", "We developed the web experience and an asset system for brochures, advertising videos, and social media content."],
  ["Piezas gráficas", "Graphic assets"],
  ["Web, Social Content, Diseño", "Web, Social Content, Design"],
  ["Web Development, Social Content, Piezas gráficas", "Web Development, Social Content, Graphic Assets"],
  ["Modernización de la marca", "Brand modernization"],
  ["+85% tiempo en sitio", "+85% time on site"],
  ["15% leads cualificados adicionales", "15% additional qualified leads"],
  ["Reducción de 60% en tiempo de cierre", "60% reduction in closing time"],
  ["Reducción 60% tiempo de cierre", "60% reduction in closing time"],
  ["Sistema web y de comunicación desarrollado para Hertz", "Web and communication system developed for Hertz"],
  ["Ecosistema de comunicación desarrollado para Hertz", "Communication ecosystem developed for Hertz"],
  ["Aplicación Hertz 1", "Hertz application 1"],
  ["Aplicación Hertz 2", "Hertz application 2"],
  ["Aplicación Hertz 3", "Hertz application 3"],
  ["Aplicación Hertz 4", "Hertz application 4"],
  ["Aplicación Hertz 5", "Hertz application 5"],
  ["¿Tu ecosistema digital necesita orden y consistencia?", "Does your digital ecosystem need structure and consistency?"],

  // Descripciones accesibles y SEO de casos
  ["Caso de branding, social media y web desarrollado por CREA Design Studio para una marca de belleza premium.", "Branding, social media, and web case study developed by CREA Design Studio for a premium beauty brand."],
  ["Caso de dirección de arte e identidad gastronómica desarrollado por CREA Design Studio.", "Restaurant art direction and identity case study developed by CREA Design Studio."],
  ["Caso de social media y dirección de arte para una marca de moda, por CREA Design Studio.", "Social media and art direction case study for a fashion brand by CREA Design Studio."],
  ["Caso de branding y experiencia digital para educación en línea, por CREA Design Studio.", "Branding and digital experience case study for online education by CREA Design Studio."],
  ["Caso de identidad y experiencia web para Derito Legal, por CREA Design Studio.", "Identity and web experience case study for Derito Legal by CREA Design Studio."],
  ["Caso de experiencia web y comunicación para alquiler de autos, por CREA Design Studio.", "Web experience and communication case study for a car rental company by CREA Design Studio."],

  // Privacidad, términos y error 404
  ["Política de privacidad del sitio web de CREA Design Studio.", "CREA Design Studio website privacy policy."],
  ["Privacidad — CREA Design Studio", "Privacy — CREA Design Studio"],
  ["Política de privacidad", "Privacy Policy"],
  ["Última actualización: 15 de agosto de 2026", "Last updated: August 15, 2026"],
  ["Esta política explica cómo CREA Design Studio trata la información enviada a través de este sitio. Podés contactar al estudio en", "This policy explains how CREA Design Studio handles information submitted through this website. You can contact the studio at"],
  ["1. Datos que recibimos", "1. Information we receive"],
  ["Cuando completás el formulario podemos recibir tu nombre, correo electrónico, sitio o perfil, presupuesto estimado, mensaje y la confirmación de aceptación de esta política. No solicitamos datos sensibles ni información de pago.", "When you complete the form, we may receive your name, email address, website or profile, estimated budget, message, and confirmation that you accept this policy. We do not request sensitive data or payment information."],
  ["2. Para qué los usamos", "2. How we use it"],
  ["Usamos esos datos para comprender y responder tu consulta, coordinar una posible conversación de trabajo y mantener el registro necesario de esa comunicación. La base del tratamiento es tu consentimiento y tu pedido de contacto.", "We use this information to understand and respond to your inquiry, coordinate a potential work conversation, and keep the necessary record of that communication. The basis for processing is your consent and request to be contacted."],
  ["3. Proveedores técnicos", "3. Technical providers"],
  ["El formulario se procesa mediante Formspree y el sitio se publica mediante GitHub Pages. Esos proveedores pueden tratar información técnica necesaria para prestar sus servicios, de acuerdo con sus propias políticas. CREA no incorpora herramientas propias de analítica, perfiles publicitarios ni cookies de seguimiento en esta versión.", "The form is processed through Formspree, and the website is published through GitHub Pages. These providers may process technical information required to deliver their services under their own policies. In this version, CREA does not use its own analytics tools, advertising profiles, or tracking cookies."],
  ["4. Conservación y acceso", "4. Retention and access"],
  ["Conservamos la consulta durante el tiempo razonablemente necesario para responderla y gestionar la relación que pueda originarse. El acceso queda limitado a quienes necesiten atenderla. No vendemos ni cedemos datos personales para publicidad.", "We retain inquiries for the time reasonably necessary to respond and manage any relationship that may result. Access is limited to those who need to handle the inquiry. We do not sell or disclose personal data for advertising."],
  ["5. Tus opciones", "5. Your choices"],
  ["Podés solicitar acceso, corrección o eliminación de la información enviada escribiendo a", "You may request access to, correction of, or deletion of the information you submitted by writing to"],
  [". También podés retirar tu consentimiento; esto no afecta el tratamiento realizado antes de ese pedido.", ". You may also withdraw your consent; this does not affect processing carried out before that request."],
  ["6. Seguridad y enlaces", "6. Security and links"],
  ["Aplicamos medidas razonables para reducir accesos no autorizados, aunque ningún envío por Internet es completamente infalible. Los enlaces a servicios de terceros se rigen por las condiciones de esos servicios.", "We apply reasonable measures to reduce unauthorized access, although no Internet transmission is completely secure. Links to third-party services are governed by those services' terms."],
  ["7. Cambios", "7. Changes"],
  ["Si esta política cambia de manera relevante, se publicará una versión actualizada en esta misma página con una nueva fecha de revisión.", "If this policy changes materially, an updated version will be published on this page with a new revision date."],
  ["Términos de uso del sitio web de CREA Design Studio.", "CREA Design Studio website terms of use."],
  ["Términos de uso — CREA Design Studio", "Terms of Use — CREA Design Studio"],
  ["Estos términos regulan el acceso al sitio de CREA Design Studio. Al navegarlo aceptás usarlo de forma lícita y respetar las condiciones indicadas a continuación.", "These terms govern access to the CREA Design Studio website. By browsing it, you agree to use it lawfully and comply with the conditions below."],
  ["1. Contenido informativo", "1. Informational content"],
  ["El sitio presenta capacidades y una selección de trabajos con fines informativos. El contenido puede actualizarse, corregirse o reorganizarse sin aviso previo. Una consulta enviada mediante el formulario no constituye por sí sola una propuesta, aceptación, reserva de disponibilidad ni contrato.", "The website presents capabilities and a selection of work for informational purposes. Content may be updated, corrected, or reorganized without prior notice. An inquiry submitted through the form does not by itself constitute a proposal, acceptance, availability reservation, or contract."],
  ["2. Propiedad intelectual", "2. Intellectual property"],
  ["El diseño del sitio, sus textos, estructura, recursos gráficos y elementos de marca pertenecen a CREA Design Studio o se utilizan con la autorización correspondiente. Las marcas de clientes o terceros conservan la titularidad de sus respectivos propietarios. No está permitida la reproducción o explotación comercial sin autorización escrita.", "The website's design, text, structure, graphic resources, and brand elements belong to CREA Design Studio or are used with the corresponding authorization. Client and third-party trademarks remain the property of their respective owners. Reproduction or commercial exploitation without written authorization is prohibited."],
  ["3. Uso permitido", "3. Permitted use"],
  ["Podés consultar y compartir enlaces públicos a estas páginas. No podés interferir con el funcionamiento del sitio, intentar acceder a sistemas ajenos, automatizar envíos abusivos ni presentar el trabajo publicado como propio.", "You may view and share public links to these pages. You may not interfere with the website's operation, attempt to access third-party systems, automate abusive submissions, or present published work as your own."],
  ["4. Enlaces y servicios externos", "4. External links and services"],
  ["El sitio puede depender de proveedores o enlazar recursos de terceros. CREA no controla su disponibilidad, seguridad ni contenidos, y el uso de esos servicios queda sujeto a sus condiciones.", "The website may rely on providers or link to third-party resources. CREA does not control their availability, security, or content, and use of those services is subject to their terms."],
  ["5. Disponibilidad y responsabilidad", "5. Availability and liability"],
  ["Trabajamos para mantener la información y el funcionamiento en buen estado, pero no garantizamos disponibilidad ininterrumpida ni ausencia absoluta de errores. Si detectás un problema, podés informarlo por correo.", "We work to keep the information and website functioning properly, but we do not guarantee uninterrupted availability or the complete absence of errors. If you identify a problem, you may report it by email."],
  ["6. Consultas", "6. Questions"],
  ["Para preguntas sobre estos términos escribí a", "For questions about these terms, write to"],
  ["La página solicitada no existe en CREA Design Studio.", "The requested page does not exist on CREA Design Studio."],
  ["Página no encontrada — CREA Design Studio", "Page Not Found — CREA Design Studio"],
  ["Esta idea todavía no tomó forma.", "This idea hasn't taken shape yet."],
  ["La página que buscás no existe o cambió de lugar.", "The page you're looking for doesn't exist or has moved."]
]);

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translatedAttributes = ["aria-label", "placeholder", "alt", "title", "content"];
const storageKey = "crea-language";
let currentLanguage = "es";

export const t = (spanishText) => {
  if (currentLanguage !== "en") return spanishText;
  const galleryImage = spanishText.match(/^(.*), imagen (\d+)$/);
  if (galleryImage) return `${translations.get(galleryImage[1]) ?? galleryImage[1]}, image ${galleryImage[2]}`;
  return translations.get(spanishText) ?? spanishText;
};

export const getCurrentLanguage = () => currentLanguage;

const shouldSkipText = (node) => {
  const parent = node.parentElement;
  if (!parent) return true;
  if (["SCRIPT", "STYLE", "NOSCRIPT", "SVG"].includes(parent.tagName)) return true;
  return Boolean(parent.closest("[data-no-translate], [data-i18n-source]"));
};

const translateTextNode = (node) => {
  if (shouldSkipText(node)) return;
  const value = node.nodeValue ?? "";
  const trimmed = value.trim();
  if (!trimmed) return;
  if (!originalText.has(node)) originalText.set(node, trimmed);
  const source = originalText.get(node);
  const target = t(source);
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${target}${trailing}`;
};

const translateElementAttributes = (element) => {
  translatedAttributes.forEach((attribute) => {
    if (!element.hasAttribute(attribute)) return;
    const value = element.getAttribute(attribute);
    if (!value) return;
    let sources = originalAttributes.get(element);
    if (!sources) {
      sources = new Map();
      originalAttributes.set(element, sources);
    }
    if (!sources.has(attribute)) sources.set(attribute, value);
    element.setAttribute(attribute, t(sources.get(attribute)));
  });
};

export const applyLanguage = (root = document.documentElement) => {
  if (root instanceof Element) translateElementAttributes(root);
  const elements = root.querySelectorAll?.("[aria-label], [placeholder], [alt], [title], meta[content]") ?? [];
  elements.forEach(translateElementAttributes);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node);
    node = walker.nextNode();
  }

  const dynamicElements = root.querySelectorAll?.("[data-i18n-source]") ?? [];
  dynamicElements.forEach((element) => { element.textContent = t(element.dataset.i18nSource); });
  if (root instanceof Element && root.matches("[data-i18n-source]")) root.textContent = t(root.dataset.i18nSource);
};

export const setI18nText = (element, spanishText) => {
  if (!element) return;
  element.dataset.i18nSource = spanishText;
  element.textContent = t(spanishText);
};

export const setI18nAttribute = (element, attribute, spanishText) => {
  if (!element) return;
  let sources = originalAttributes.get(element);
  if (!sources) {
    sources = new Map();
    originalAttributes.set(element, sources);
  }
  sources.set(attribute, spanishText);
  element.setAttribute(attribute, t(spanishText));
};

const updateLanguageControls = () => {
  document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
    const englishActive = currentLanguage === "en";
    toggle.setAttribute("aria-pressed", String(englishActive));
    toggle.setAttribute("aria-label", englishActive ? "Switch language to Spanish" : "Cambiar idioma a inglés");
    toggle.querySelector('[data-language-option="es"]')?.classList.toggle("is-active", !englishActive);
    toggle.querySelector('[data-language-option="en"]')?.classList.toggle("is-active", englishActive);
  });
};

export const setLanguage = (language, persist = true) => {
  currentLanguage = language === "en" ? "en" : "es";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;
  applyLanguage();
  updateLanguageControls();
  if (persist) {
    try { window.localStorage.setItem(storageKey, currentLanguage); } catch { /* Storage may be unavailable. */ }
  }
  document.dispatchEvent(new CustomEvent("crea:languagechange", { detail: { language: currentLanguage } }));
};

export const initializeLanguage = () => {
  let savedLanguage = "es";
  try { savedLanguage = window.localStorage.getItem(storageKey) === "en" ? "en" : "es"; } catch { /* Spanish remains the default. */ }
  document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));
  });
  setLanguage(savedLanguage, false);
};
