<div class="container feedbacks">    
  <div class="row mt-4">       
    <div class="col">       
      @foreach ($realty->feedbacks->sortByDesc('date') as $feedback)
        <div class="jumbotron">
          <h3>{{ $feedback->author }}</h3>
          <p class="lead">{{ $feedback->date }}</p>
          <hr class="my-4">
          <div>
            <p>{{ $feedback->text }}</p>
          </div>
        </div> 
      @endforeach      
    </div>
  </div>
</div>