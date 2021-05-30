# GTP-3_API

In this repository you will find example python and javascript codes that goes over the bare minimum required to make api requests to OpenAI's GPT-3 api 

To use this repository make an .txt file named API_KEY in the root of this directory containing only your [Secret API Key](https://beta.openai.com/account/api-keys)

### Good too know:
1. engine:
    * Davinci: Complex intent, cause and effect, summarization for age.
    * Curie: Language translation, complex classification, text sentiment, summarization.
    * Babbage: Moderate classification, semantic search classification.
    * Ada: Text parsing, simple classification, address correction, keywords
2. prompt: "I think therefore i am"
    * Most important setting, it is the text GPT-3 will continue writing on
    * Usually helps to tell GPT-3 what text represents. Example: The following is a list of..., The assistant is helpful creative, clever, and very friendly... etc
    * It also helps to give GPT-3 examples English: I do not speak Spanish. Spanish: No hablo español. English: How are you? Spanish:
    * tl;dr Can be used to prompt gpt-3 to summarize text
3. temperature: float 0...1.0
    * Influences how deterministic the model will be when generating a result. I.E the models "randomness"
    * Lower value means the model will be more deterministic
    * Higher value means the model will be less deterministic
4. max_tokens: int
    * Is the maximum amount of tokens spent for a given response
    * 1 token is rougly 1 word
    * Token cost depends on engine, the more complex the more expensive it is
    * 1000 tokens is 0.06$ for the best engine, 0.0008 for the worst  
5. top_p: float 0...1.0
    * Like temperature, Top P can be used to increase or limit the seeming randomness of a completion. However, unlike the temperature, it’s influencing the randomness by limiting the scope of the possible results that should be considered
6. frequency_penalty: float 0...1.0
    * Used to discurrage GPT-3 to reuse text. The higher the value and the more that text already has been used the lower the chance that text will be written again
7. presence_penalty: float 0...1.0
    * Used to discurrage GPT-3 to reuse text that has been written once
8. best_of: int
    * The best of setting will cause the model to generate multiple completions on the server side and return the best of thoose completions
9. stop: ["text1", "text2", "text3", "text4"]
    * Stop Sequenceis a text sequence that will cause a completion to end when the sequence is encountered in the completion