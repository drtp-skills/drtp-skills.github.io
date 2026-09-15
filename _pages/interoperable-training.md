---
title: "Interoperable Training"
permalink: /interoperable-training/
layout: single
classes: wide
toc: true
---

### Introduction

The aims of the CHARTED project include “making HPC training content more FAIR (findable, accessible, interoperable and reusable)”. This terminology may not be familiar to everyone involved in the development of the training ecosystem for digital Research Technical Professionals. Even where the terminology may be familiar, different people will have different [interpretations of the terms](/defining-fair-training/). To examine this, it's useful to look at each of the terms in more detail, so what specifically does it mean for training content to be interoperable?

### Definitions

The [FAIR Principles](https://www.gofair.foundation/) are a set of fifteen principles first defined in the context of research data, but broadly applicable to any digital resource. The principles state that for data (or metadata) to be interoperable they should:

> * I1: use a formal, accessible, shared, and broadly applicable language for knowledge representation
> * I2: use vocabularies that follow FAIR principles
> * I3: include qualified references to other (meta)data

Due to their broad applicability, this guidance is non-specific, and more specific definitions have been given for learning materials (taken from [Skills4EOSC FAIR-by-design](https://www.skills4eosc.eu/resources/fair-by-design-methodology)):

> * The metadata describing the learning material follows the RDA minimum metadata schema combined with agreed-upon controlled vocabularies.
> * Formal, accessible, shared, and broadly applicable language(s) and format(s) are used to develop the material.

Succinct specific guidance is given in [Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854), although the rule text only mentions interoperability once:

> * Rule 6: Use an interoperable format for your training materials

However, other rules are also important for this aspect, most prominently:

> * Rule 2: Improve findability of your training materials by properly describing them

This definition refers to the Research Data Alliance’s [minimal metadata set for learning resources](https://doi.org/10.15497/RDA00073). This states that metadata for learning material should, at a minimum, include

> * Title: The human readable name of the resource.
> * Abstract / Description: A brief synopsis about or description of the learning resource
> * Author(s): Name of entity(ies) authoring the resource
> * Primary Language: Language in which the resource was originally published or made available
> * Keyword(s): Keywords or tags used to describe the resource
> * Version Date: Version date for the most recently published or broadcast resource
> * URL to Resource: URL that resolves to the learning resource or to a "landing page" for the resource that contains important contextual information including the direct resolvable link to the resource, if applicable.
> * Resource URL Type: Designation of the identifier scheme used for the resource URL, e.g., DOI, ARK, Handle
> * License: A license document that applies to this content, typically indicated by URL
> * Access Cost: Choice stating whether or not there is a fee for use of the resource (yes, no, maybe)
> * Target Group (Audience): Principal users(s) for which the resource was designed
> * Learning Resource Type: The predominant type or kind that characterizes the learning resource
> * Learning Outcome: Descriptions of what knowledge, skills or abilities a learner should acquire on completion of the resource
> * Expertise (Skill) Level: Target skill level in the topic being taught; example values include beginner, intermediate, advanced

### Interpretations

These definitions of interoperability focus on the enabling technical factors that are necessary for learning material to interoperate. During a community feedback session held by the CHARTED project at CIUK 2025, trainers and learners were asked to reflect on what interoperability of training meant to them, and answers covered a number of different aspects. These did include some answers related to technical aspects, particularly file formats:

> * Consistent file formats and dependent tooling \- standardization
> * Static websites, markdown, Obsidian? \- easy to develop/publish as well as consume

However, none of the answers specifically referred to metadata. Instead, participants were more focused on the interoperability of the subject of the training itself:

> * Understand how \[a training material\] interacts with other training
> * Dependencies/parent-child relationship between training content
> * Explicit dependencies/pre-requisites to engage with training
> * Appropriate scoping, e.g. if teaching MPI, decide in advance whether scheduler knowledge is expected
> * Where bridging different training content, offer "shim"/key or differentiate what is/is not in scope

There was also a clear indication that the granularity of the training material mattered, and that interoperability often required small pieces of training material, that are only a small part of a larger training course or session.

> * Prioritize modularity/atomicity
> * Bias towards smaller training components
> * Roadmap of N training modules which combine to deliver a pre-defined skillset
> * Balance between monolith (easy to control dependencies) and modular
> * Break down "beginner" training into even more modular components than expected (e.g. Python list comprehensions rather than just beginner Python)

It’s clear that meeting the technical definitions of interoperability referred to above are going to be necessary to work towards CHARTED’s goal of making the training ecosystem easier to navigate. However, without consideration of the relationships between training and training material, and broad agreement on shared language and controlled vocabularies, it is not by itself going to be sufficient to allow learners to easily relate learning from different items of training. For example, how easily can learners take skills they have gained from one piece of training, apply them to a new context and build on them in another piece of training? From some viewpoints, this may be seen as related to other FAIR principles rather than interoperability, but for the purposes of CHARTED this is not important \- CHARTED is interested in funding work that addresses any of these interpretations of interoperability.

### Benefits

The benefits of interoperability could be seen as either benefits for learners or benefits for creators. Many of the statements below are positioned as benefits for learners. However, this is not a true division and the two are closely linked. For example, by making changes that benefit learners, you increase the number of learners who benefit from your training, hopefully bringing more positive attention to your training, more future learners, more opportunities for funding etc. Similarly, making changes that benefit creators could reduce the amount of time they spend on maintaining training, and free up time to improve the quality of the training, therefore benefiting learners.

#### Metadata

Describing your training with metadata is crucial for making it FAIR. It helps to make your material more discoverable through web searches and to integrate your training material into training repositories such as [TeSS](https://tess.elixir-europe.org/) or  [HPC-ED Search](https://search-pilot.operations.access-ci.org/hpc-ed-v2/), as well as helping to give others clear guidance on if and how they can use or reuse it. For more information, see [Rule 2](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007854#sec003) of "[Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854)".

#### Generalisation

A key aspect of how easy it is for a learner to put together learning from different providers is how generalisable the training is. If a learner has completed some training using a specific language or tool and then wishes to take some additional training that requires a different language or tool, they may not be able to build upon their knowledge gained from the first, or they may not even realise they have the required knowledge to take the second training at all.

Developing training that supports multiple platforms and tools is beneficial for all learners. Choosing which platforms, languages or tools to support is a balancing act. The more platforms, languages or tools that you support, the wider your pool of potential learners. Additionally,
if your training resource requires the use of tools that communicate using proprietary standards, you may be limiting the number of people who are able to use your training, as they may not be able to make use of these tools.

There are of course costs associated with supporting multiple environments, and it’s not feasible for all training. It's common therefore for training to teach general principles and approaches, but through the use of a specific set of tools or domain specific examples. It's helpful for learners to be able to identify when this is happening, and which parts of the training are generally applicable, and which are specific to particular software or platforms. This helps them when trying to apply the learning to a new context or set of tools, or when considering if they have the prerequisite knowledge for other training courses.

#### Relationships to other training

One challenge that learners can face is identifying whether they have the right level of knowledge to start a particular piece of training. If you're expecting your learners to already have a particular level of knowledge, one way to help them check that is to identify other pieces of training that would give them the required knowledge.

#### Vocabulary

It’s important that you clearly set out for potential learners what your training material is intended to teach and who it is for. This should include the intended audience, learning outcomes, prerequisite knowledge, estimated time commitment and keywords identifying the topic or domain. By doing so, you’re helping learners identify if this training is likely to be beneficial for them, potentially increasing the number of learners you have, as well as ensuring that learners don’t waste their and your time on training that isn’t suitable for them (hopefully steering them towards training that is).

In particular, using terminology that is common in your target community will help community members to find and evaluate your training. By using role names, skills, topics and other terms that will be familiar to your potential learners, they can identify whether this training is right for them.

You can also look to use terminology that is drawn from an appropriate controlled vocabulary, such as a defined job family, competency or similar. This further helps potential learners to clarify if the training is right, and makes integration with other systems or training resources easier.

### Guidance

#### Metadata

A first step in adding metadata to your training material is to decide which metadata schema to use. While any structured metadata is probably better than none, the true value comes in using a schema that is shared by others. Two commonly-used schemas are the [RDA minimal metadata](https://doi.org/10.15497/RDA00073) and [training-related Bioschemas profiles](https://bioschemas.org/profiles/index). You may want to take into consideration your purposes for providing metadata and the requirements of any platforms. For example, TeSS publishes [documentation about how they use metadata in displaying training material](https://tess.elixir-europe.org/about/registering#automatic).

You can add metadata to your training material in a variety of ways. For example, there are guides on adding Bioschemas metadata [directly in HTML](https://bioschemas.org/tutorials/howto/howto_add_markup), or in [GitHub Pages](https://bioschemas.org/tutorials/howto/howto_add_github) (while these guides are for Bioschemas specifically, they should be broadly adaptable to other schema as well). Managing metadata manually can be cumbersome however, particularly at a low-level of granularity, so one approach may also be to build upon templates or frameworks that help support the generation of metadata, such as those provided by the [Galaxy Training Network](https://training.galaxyproject.org/training-material/faqs/gtn/fair_training.html) or [Carpentries Workbench](https://carpentries.github.io/workbench/).

Metadata isn't useful if you don't check that it is correct. If it is not, other systems that try to integrate, access or display your training may do so incorrectly, or you may be excluded altogether. You can use validators to check that your metadata is structurally correct, and viewers to check that the information in it matches what you expect.

For more information, see [Chapter 4 of ELIXIR FAIR Training Handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/chapters/chapter_04/).

Examples:

* [https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-101-everyone/tutorial.html](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-101-everyone/tutorial.html) (View HTML source and look for \<script type=”application/ld+json”\> or load into a JSON-LD extractor)
* [https://tess.elixir-europe.org/materials/hands-on-for-python-math-tutorial](https://tess.elixir-europe.org/materials/hands-on-for-python-math-tutorial)  (View HTML source and look for \<script type=”application/ld+json”\> or load into a JSON-LD extractor)
* [https://swcarpentry.github.io/shell-novice/](https://swcarpentry.github.io/shell-novice/) (View HTML source and look for \<script type=”application/ld+json”\> or load into a JSON-LD extractor)
* [https://validator.schema.org](https://validator.schema.org)
* [https://json-ld.org/playground/](https://json-ld.org/playground/)

#### Generalisation

As mentioned, choosing which platforms, languages or tools to support is important, as the more that you support, the more potential learners will be able to use your training. However, the more you support, the more work it will be to maintain the training resource, and to test that the different options continue to work. It can be easier to write training using tools or platforms you already have experience with, but if these are not popular with the target community, you may limit the number of people who can use your training. If you have limited time or effort available, it’s worth focusing on tools that are widely used in your target community.
This can be based on platform, e.g. do your learners typically use Linux, Windows or MacOS, or do you need to support all three? For web-based training, there are a variety of different browsers, so if you want to maximise the uptake of your web-based training, you should aim to support multiple browsers: e.g. at least Edge, Mozilla Firefox, Google Chrome and Safari.

If you can choose open tools and communication services instead of proprietary versions, this will also help improve adoption. For any proprietary tools and services you use, or any which have barriers or access restrictions, evaluate whether there are open alternatives and whether their use would make your training easier for learners to build on and continue to use after the training. Even if the alternative tool cannot be used identically, you can still outline to learners what each can and cannot do. Similarly, where you are using specific tools to teach general concepts, include sections to illustrate to users how this might be applied elsewhere.

Examples

* [https://carpentries.github.io/workshop-template/install\_instructions/](https://carpentries.github.io/workshop-template/install_instructions/) (Instructions given for Windows, MacOS and Linux)
* [https://carpentries-incubator.github.io/docker-introduction/index.html](https://carpentries-incubator.github.io/docker-introduction/index.html) (In the introduction and at several points throughout the course, emphasises that Podman is a container technology, and explains how others are similar/different)
* [https://swcarpentry.github.io/sql-novice-survey/index.html](https://swcarpentry.github.io/sql-novice-survey/index.html) (Uses SQLite to teach SQL and database concepts, rather than any proprietary database management systems. At several points, use specific callouts to indicate how SQLite may differ from other systems)

#### Relationships to other training

If you're expecting your learners to already have a particular level of knowledge, one way to help them check that is to identify other pieces of training that would give them the required knowledge. This can be training that you yourself offer, or it can be training available elsewhere. If you’re not able to identify suitable training, you could try asking your current and past learners what other training they had done in the past that prepared them. If you’re still not able to identify anything, that could identify a potential gap where further training material is needed.

Where there is other training that may cover some but not all of your prerequisite knowledge, you could consider developing bridging material to support those learners, rather than material that covers all the required prerequisites. You could also try to identify common learning pathways for your target audience, illustrating how different pieces of training fit together.

Examples:

* [https://galaxyproject.github.io/training-material/topics/sequence-analysis/tutorials/quality-control/tutorial.html](https://galaxyproject.github.io/training-material/topics/sequence-analysis/tutorials/quality-control/tutorial.html) (Requirements)
* [https://www.archer2.ac.uk/training/courses/260415-modern-c/](https://www.archer2.ac.uk/training/courses/260415-modern-c/) (Prerequisites, adapting experience from one tool to another)
* [https://galaxyproject.github.io/training-material/learning-pathways/](https://galaxyproject.github.io/training-material/learning-pathways/)
* [https://tess.elixir-europe.org/learning\_paths](https://tess.elixir-europe.org/learning_paths)

#### Vocabulary

When describing your training material, you should think about terms that are common in your community. Even if there is no common terminology in your community, you should ensure that you are consistent with any other training resources that you produce.

When describing the expected audience for your training, be careful of the terminology you use. Words such as beginner or expert can be interpreted in different ways, and many people might be experts in one domain and beginners in another. One way to work towards this is to look at what other training creators use. For example, the training material hosted in [Elixir TeSS](https://tess.elixir-europe.org/materials) can be filtered by the target audience, and the list of most commonly used audience descriptions can be seen from these filters. You could also consider asking your target audience, for example by identifying people that you think your training would be suitable for, and ask them what terms they would use to describe themselves.

Similar processes can be useful for other aspects of the description. For example, a course prerequisite such as “Python” may not tell the learner anything about the level of experience they need to have with Python. By being more specific about the exact knowledge you expect learners to have, you can help them evaluate the training and themselves. You can evaluate this by examining your material, or by asking your past or current learners. The same is true of learning outcomes.

Keywords and terms can also be identified this way, and again looking at what other training providers do can be useful. Again, Elixir TeSS allows filtering by topic and keywords, as does [Galaxy Training Network](https://galaxyproject.github.io/training-material/), and these lists can be useful when examining your own material.

When describing the estimated time commitment for your training, using common time definitions such as hours can be easier for people to understand than days, half-days, weeks etc \- learners’ working time varies and two people could have different definition of how long is available in a day

Where possible, drawing these terms from controlled vocabularies can improve integration between different systems. For the audience description, these could include [DIRECT Framework roles](https://directframework.com/framework/roles/) or [CaRCC Job Families](https://carcc.org/products_resources/hrjf-matrix/). For prerequisites and learning outcomes, these could be [DIRECT Framework competencies / skill levels](https://directframework.com/framework/skills_and_competencies/), [HPC Certification Forum competencies/skills](https://www.hpc-certification.org/cs/) or prerequisites and learning outcomes of other training resources. For keywords, this could be ontologies relevant to your domain, and for estimated time commitment these could be ISO8601 durations.

Examples

* [https://swcarpentry.github.io/python-novice-gapminder/](https://swcarpentry.github.io/python-novice-gapminder/) (Prerequisites)
* [https://tess.elixir-europe.org/materials/advanced-sparql-queries-and-best-practices](https://tess.elixir-europe.org/materials/advanced-sparql-queries-and-best-practices) (Target audience)
* [https://galaxyproject.github.io/training-material/topics/computational-chemistry/](https://galaxyproject.github.io/training-material/topics/computational-chemistry/) (Filtering by subject and tags)
* [https://directframework.com/framework/learning-resources/](https://directframework.com/framework/learning-resources/) (Skills)
* [https://galaxyproject.github.io/training-material/topics/computational-chemistry/tutorials/htmd-analysis/tutorial.html](https://galaxyproject.github.io/training-material/topics/computational-chemistry/tutorials/htmd-analysis/tutorial.html) (Time estimation)

### References and further material

This material and guidance is based on:

* [SSI Software Evaluation Service](https://www.software.ac.uk/resources/online-sustainability-evaluation)
* [ELIXIR FAIR training handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/)
* [Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854)

