class CouponsController < ApplicationController

  def index
    @coupons = Coupon.all
  end

  def add_coupon
    c_id = params[:id]
    @coupon = Coupon.where(:id => c_id).first
    if not @coupon.nil?
      if not @coupon.distributed
        @coupon.distributed = true
        @coupon.user_id = current_user.id
        @coupon.save!
        session[:coupons] ||= []
        session[:coupons] << @coupon.id
        respond_to do |format|
          format.js
        end
      else
        render :js => "FlashNotice('warning', 'Oops! Too late! Someone already booked it. Try another one.');"
      end
    else
        render :js => "FlashNotice('error', 'No such coupon!');"
    end
  end

  def remove_coupon
    c_id = params[:id]
    @coupon = Coupon.where(:id => c_id).first
    if not @coupon.nil?
      @coupon.distributed = false
      @coupon.save
      session[:coupons].delete(@coupon.id)
      respond_to do |format|
        format.js
      end
    else
      render :js => "FlashNotice('error', 'No such Coupon');"
    end
  end
end
