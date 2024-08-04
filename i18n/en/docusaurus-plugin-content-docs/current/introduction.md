---
slug: introduction
title: Introduction
authors: endi
tags: [readings]
sidebar_position: 1
---


## What is GPT-Tutor?

Imagine having a teacher who is available 24/7, patiently explaining all your learning questions, helping you with pronunciation, learning and reviewing vocabulary, explaining grammar you don't understand, assisting you in close reading of articles, and practicing writing. That teacher is **GPT-Tutor**.

### How GPT-Tutor Works

It's simple: **You ask questions, GPT-Tutor answers**.

I have set up various appropriate **ways to ask questions** for you in the [Action Manager](./main-explain/actionManager.md). You just need to select from the drop-down menu in the upper left corner which aspect you want to ask about (such as questions about "Vocabulary Learning"), choose it, then select a specific way to ask in the upper right corner icon, and enter your question in the input box. For example, if you select "Word Explanation" and type "cat," GPT-Tutor will then explain the meaning of 'cat'.

If you think these questioning methods do not meet your needs, you can also add new ways of asking questions in the [Action Manager](./main-explain/actionManager.md).

### Advantages of GPT-Tutor

- **Available 24/7, unconditionally, with absolute patience**, capable of explaining all pronunciations, words, grammar, and helping you read articles and practice writing.
- **Supports learning multiple languages**, including English, Japanese, French, German, and more.
- **Simultaneously learn pronunciation, vocabulary, sentences, grammar, and writing**, linking the entire learning process together.
- **Simulate native language learning**. GPT-Tutor allows you to learn and master a language as if it were your native tongue.
- **Customization**. You can **customize** your learning methods and content according to your habits and preferences.

## The Origin of GPT-Tutor

Over the past year, I have been conversing with ChatGPT (probably more than all the conversations I've had with everyone in the previous years combined), exploring the possibilities of using AI for language learning. The result of this year is **GPT-Tutor** and **a set of methods for completing language learning with GPT-Tutor**.

Initially, I discovered that if used correctly, ChatGPT was actually better than **any language learning app I knew**, but since ChatGPT was not specifically designed for language learning, it lacked many essential features, such as a vocabulary review mechanism. Each time I used ChatGPT to explain a word, I had to manually add the word to Anki for review. So, I thought, if there could be a platform more suitable than ChatGPT, the powerful functions of AI in language learning could be unleashed.

The first platform I found was **OpenAI-Translator**. This software could store the prompts I set for explaining words, allowing me to use ChatGPT at any time without having to open the webpage and re-enter each time, and it could also read words and sentences, fulfilling my basic needs for learning vocabulary. However, I quickly realized its shortcomings: just like ChatGPT, OpenAI-Translator was designed as a translator and not as a language learning tool, and many of its features were not suitable for language learning, in other words, it was not a good platform. Fortunately, OpenAI-Translator is open-source (special thanks to the developer @yetone for developing this very useful tool and making it open-source), and I began to modify OpenAI-Translator according to my learning needs.

Initially, I just added a grouping feature to categorize different functions, such as placing the function for learning English writing in one group, and the function for learning Japanese vocabulary in another. Then I realized I needed to save the queried words for review, so I added a feature to save query results. To make learning IELTS core vocabulary more convenient, I added an import vocabulary book feature; later, I felt there should be a review mechanism, and initially, I tried importing to Anki for review, but found this inconvenient, so I built-in a review mechanism... Step by step, I made a series of modifications to OpenAI-Translator, finally completing the **current version of GPT-Tutor**.

The current version of GPT-Tutor is still not the platform I envisioned, but it is usable, effective, and more suitable than ChatGPT. I hope to continue improving this tool with the help of the open-source community.

## The Future of GPT-Tutor

The current phase of GPT-Tutor uses AI as a teacher to instruct students in language learning, but this is not the ultimate goal. The ultimate goal is for AI to "take a step back," serving as a teaching assistant to help human teachers, creating a new educational model of teacher-AI assistant-student.

### Traditional Educational Model

The traditional educational model is **1 teacher to n students**, especially in populous countries like China and India, where n can be very large, making the educational resources each student receives from the teacher extremely limited.

In most universities, an "intermediary" – the teaching assistant – has been added between the teacher and students, turning it into 1 teacher-1 assistant-n students. The assistant undertakes most of the teacher's non-teaching duties and some teaching duties, allowing the teacher to spend more time and energy focusing on teaching students.

But as previously mentioned, this model also suffers when n is too large; the educational resources available to all students are reduced. **AI can effectively solve this dilemma**.

### How AI Can Change the Traditional Educational Model

AI can serve as a teaching assistant, helping teachers modify homework and answer questions 24/7, while the teacher only needs to address issues the AI assistant can't solve or correct mistakes made by the AI assistant. This greatly frees teachers from repetitive tasks, allowing them to focus more on teaching effectively.

With an AI assistant, each teacher can focus more on teaching, and one teacher can be responsible for more students than before. The traditional educational model becomes: **1 teacher-N AI assistants-N students**. Each student can receive 1-on-1 help from the AI assistant, available 24/7, patient, and friendly. With the help of AI assistants, not only can each student receive exponentially more educational resources, but each teacher's job also becomes easier and more effective.

### Future Development Path for GPT-Tutor

Awaiting completion...
