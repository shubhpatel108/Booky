class BooksController < ApplicationController

  def index
    $book_groups = BookGroup.all
    $book_names = $book_groups.map(&:title)
    college_id = cookies[:college_id]
    $book_groups.each do |group|
        group[:stock] = group.books.where(:college_id => college_id).count
    end
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(params[:book])
    if @book.save
      flash[:success] = "Book is saved for selling purpose."
      redirect_to :root
    else
      render 'new'
    end
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    if @book.update_attributes(params[:book])
      redirect_to :root
    else
      render "edit"
    end
  end

  def main_search
  	@query = params[:query]
    @results = BookGroup.where(["title like ? or author like ?", "%#{@query}%", "%#{@query}%"])
    respond_to do |format|
      format.html
    end
  end

  def sell_autofill
    titl = params[:book_title]
    if not titl.empty?
      @est_book = BookGroup.where(["title like ?", "%#{titl}%"]).first
    end
    respond_to do |format|
      format.js
    end
  end

  def sell
    @book = Book.new
  end

  def request_seller
    email = params[:seller_email]
    message = params[:message]
    BookMailer.request_seller(email, message).deliver
    redirect_to :root
  end

end
